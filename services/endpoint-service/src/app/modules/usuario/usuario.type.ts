import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cargo, Usuario } from '@horario-estudantil/schemas';
import { CargoType } from '../cargo/cargo.type';

@ObjectType('Usuario')
export class UsuarioType implements Usuario {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  keycloakId!: string | null;

  @Field(() => CargoType, { nullable: true })
  cargo!: Cargo;
}
