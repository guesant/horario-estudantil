import { ApelidoType } from '../../apelido/schemas/Apelido.type';
import { AulaTurmaType } from '../../aula/schemas/AulaTurma.type';
import { CategoriaTurmaType } from '../../categoria-turma/schemas/CategoriaTurma.type';
import {
  Apelido,
  AulaTurma,
  CategoriaTurma,
  Instituicao,
  Turma,
} from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InstituicaoType } from '../../../schemas/instituicao.type';

@ObjectType('Turma')
export class TurmaType implements Turma {
  @Field(() => Int)
  id!: number;

  @Field(() => InstituicaoType)
  instituicao!: Instituicao;

  @Field(() => ApelidoType)
  apelidoPrincipal!: Apelido;

  @Field(() => [ApelidoType])
  apelidos!: Apelido[];

  @Field(() => CategoriaTurmaType, { nullable: true })
  categoriaTurma!: CategoriaTurma | null;

  @Field(() => [AulaTurmaType])
  aulaTurmaRelations!: AulaTurma[];
}
