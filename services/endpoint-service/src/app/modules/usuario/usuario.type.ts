import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cargo, RegraBruta, Usuario } from '@horario-estudantil/schemas';
import { CargoType } from '../cargo/cargo.type';
import GraphQLJSON from 'graphql-type-json';

@ObjectType('Usuario')
export class UsuarioType implements Usuario {
  @Field(() => Int)
  id!: number;

  // @Field(() => String)
  keycloakId!: string | null;

  @Field(() => CargoType, { nullable: true })
  cargo!: Cargo | null;

  @Field(() => GraphQLJSON)
  autorizacaoRegras!: RegraBruta[];
}
