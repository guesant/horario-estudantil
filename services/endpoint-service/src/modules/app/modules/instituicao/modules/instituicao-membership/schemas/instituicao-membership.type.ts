import { InstituicaoType } from '../../../schemas/instituicao.type';
import { UserType } from '../../../../user/schemas/user.type';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Instituicao,
  InstituicaoMembership,
  User,
} from '@horario-estudantil/schemas';

@ObjectType('Instituicao_Membership')
export class InstituicaoMembershipType implements InstituicaoMembership {
  @Field(() => Int)
  id!: number;

  @Field(() => UserType)
  usuario!: User;

  @Field(() => InstituicaoType)
  instituicao!: Instituicao;
}
