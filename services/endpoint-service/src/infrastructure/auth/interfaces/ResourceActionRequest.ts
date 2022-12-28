import { authorization, RegraBruta } from '@horario-estudantil/schemas';
import { ForbiddenException } from '@nestjs/common';
import {
  Abilities,
  createAbility,
} from '@horario-estudantil/schemas/dist/authorization';
import { permittedFieldsOf } from '@casl/ability/extra';
import { pick } from 'lodash';
import { IActionRequestUser } from './IActionRequestUser';
import { detectSubjectType, ExtractSubjectType, subject } from '@casl/ability';
import { purify } from '../../purify';

const getForbiddenErrorMessage = (
  action: string,
  subjectType: string,
  field?: string,
) =>
  purify(
    [
      `You are not allowed to perform the action '${action}'`,
      ` in the subject '${subjectType}'`,
      ...(field ? [` on field '${field}'`] : []),
      '.',
    ].join(''),
  );

export class ResourceActionRequest {
  user?: IActionRequestUser;

  ability!: authorization.AppAbility;

  constructor(regras: RegraBruta[] = []) {
    this.ability = createAbility(regras);
  }

  static forUser(userId: number, regras: RegraBruta[]) {
    const resourceActionRequest = new ResourceActionRequest(regras);
    resourceActionRequest.user = { id: userId };
    return resourceActionRequest;
  }

  static forPublicReadStrict() {
    const resourceActionRequest = new ResourceActionRequest([
      { action: 'read', subject: 'cargo' },
      { action: 'read', subject: 'permissao' },
    ]);

    return resourceActionRequest;
  }

  static forSystemInternalActions() {
    const resourceActionRequest = new ResourceActionRequest([
      { action: 'manage', subject: 'all' },
    ]);

    return resourceActionRequest;
  }

  getAbility() {
    return this.ability;
  }

  ensurePermission<
    Action extends Abilities[0],
    TargetSubject extends Abilities[1],
  >(action: Action, targetSubject: TargetSubject, field?: string) {
    const ability = this.getAbility();

    if (ability.cannot(action, targetSubject, field)) {
      const subjectType =
        typeof targetSubject === 'string'
          ? targetSubject
          : detectSubjectType(targetSubject);

      throw new ForbiddenException(
        getForbiddenErrorMessage(action, <string>subjectType, field),
      );
    }
  }

  readResource<
    TargetSubject extends ExtractSubjectType<Abilities[1]>,
    Resource,
  >(targetSubject: TargetSubject, resource: Resource): Partial<Resource> {
    const resourceWithSubject = subject(targetSubject, <any>resource);

    this.ensurePermission('read', resourceWithSubject);

    const permittedFields = this.getPermittedFields(
      'read',
      resourceWithSubject,
    );

    return permittedFields === true
      ? resource
      : pick(resource, permittedFields);
  }

  updateResource<
    TargetSubject extends ExtractSubjectType<Abilities[1]>,
    IncomingResource,
    IncomingChanges extends Partial<IncomingChanges>,
    UpdatedResource extends IncomingResource,
  >(
    targetSubject: TargetSubject,
    resource: IncomingResource,
    incomingChanges: IncomingChanges,
    action: 'update' | 'create' = 'update',
  ): UpdatedResource {
    const resourceWithSubject = subject(targetSubject, <any>resource);

    const permittedFields = this.getPermittedFields(
      action,
      resourceWithSubject,
    );

    const changes =
      permittedFields === true
        ? incomingChanges
        : pick(incomingChanges, permittedFields);

    return Object.assign({}, resource, changes) as UpdatedResource;
  }

  getPermittedFields(
    action: Abilities[0],
    subject: Abilities[1],
  ): string[] | true {
    const ability = this.getAbility();

    const defaultFields = ['_____DEFAULT_____'];

    const fields = permittedFieldsOf(ability, action, subject, {
      fieldsFrom: (rule): any => rule.fields || defaultFields,
    });

    if (JSON.stringify(fields) === JSON.stringify(defaultFields)) {
      return true;
    }

    return fields;
  }
}
