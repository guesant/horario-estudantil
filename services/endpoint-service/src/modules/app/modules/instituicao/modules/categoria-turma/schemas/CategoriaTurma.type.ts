import { TurmaType } from '../../turma/schemas/turma.type';
import { InstituicaoType } from '../../../schemas/instituicao.type';
import {
  CategoriaTurma,
  Instituicao,
  Turma,
} from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('TurmaCategoria')
export class CategoriaTurmaType implements CategoriaTurma {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  titulo!: string | null;

  @Field(() => String)
  tituloFilhos!: string;

  @Field(() => [TurmaType])
  turmas!: Turma[];

  @Field(() => InstituicaoType)
  instituicao!: Instituicao;

  @Field(() => CategoriaTurmaType, { nullable: true })
  turmaCategoriaPai!: CategoriaTurma | null;
}
