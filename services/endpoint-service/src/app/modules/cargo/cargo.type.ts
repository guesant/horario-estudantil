import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cargo, Permissao } from '@horario-estudantil/schemas';
import { PermissaoType } from '../permissao/permissao.type';

@ObjectType('Cargo')
export class CargoType implements Cargo {
  @Field(() => Int)
  id!: number;

  @Field(() => [PermissaoType])
  permissoes!: Permissao[];
}
