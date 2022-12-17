import { InstituicaoMembershipType } from '../../instituicao/modules/instituicao-membership/schemas/instituicao-membership.type';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InstituicaoMembership, User } from '@horario-estudantil/schemas';

@ObjectType('Usuario')
export class UserType implements User {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  keycloakId!: string;

  @Field(() => String)
  nome!: string;

  @Field(() => [InstituicaoMembershipType])
  memberships!: InstituicaoMembership[];
}
