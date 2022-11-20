
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Apelido {
    id?: Nullable<string>;
    apelido?: Nullable<string>;
}

export class Aula {
    id?: Nullable<string>;
    evento: Evento;
    turmas: Turma[];
    materia?: Nullable<Materia>;
    professores: Professor[];
}

export class Etapa {
    id?: Nullable<string>;
    semanas: Semana[];
    periodoLetivo: PeriodoLetivo;
}

export class Evento {
    id?: Nullable<string>;
    fim?: Nullable<string>;
    inicio?: Nullable<string>;
    diaDaSemana?: Nullable<number>;
    aula?: Nullable<Aula>;
    semana: Semana;
}

export class CategoriaTurma {
    id?: Nullable<string>;
    titulo?: Nullable<string>;
    tituloFilhos?: Nullable<string>;
    turmas?: Nullable<Nullable<Turma>[]>;
    instituicao?: Nullable<Instituicao>;
    categoriaTurmaPai?: Nullable<CategoriaTurma>;
}

export class Materia {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    aulas?: Nullable<Nullable<Aula>[]>;
    apelidos?: Nullable<Nullable<Apelido>[]>;
}

export class PeriodoLetivo {
    id?: Nullable<string>;
    etapas?: Nullable<Nullable<Etapa>[]>;
    instituicao?: Nullable<Instituicao>;
}

export class Professor {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    aulas?: Nullable<Nullable<Aula>[]>;
    apelidos?: Nullable<Nullable<Apelido>[]>;
}

export class Semana {
    id?: Nullable<string>;
    inicio?: Nullable<string>;
    fim?: Nullable<string>;
    etapa?: Nullable<Etapa>;
    eventos?: Nullable<Nullable<Evento>[]>;
}

export class Turma {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    aulas?: Nullable<Nullable<Aula>[]>;
    apelidos?: Nullable<Nullable<Apelido>[]>;
    categoriaTurma?: Nullable<CategoriaTurma>;
}

export class InstituicaoMembership {
    id?: Nullable<string>;
    usuario?: Nullable<Usuario>;
    instituicao?: Nullable<Instituicao>;
}

export class Instituicao {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    sigla?: Nullable<string>;
    apelido?: Nullable<string>;
    memberships: Nullable<InstituicaoMembership>[];
    categoriasTurma: Nullable<CategoriaTurma>[];
    periodosLetivos: Nullable<PeriodoLetivo>[];
}

export class Usuario {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    memberships?: Nullable<Nullable<InstituicaoMembership>[]>;
}

export class SearchInstituicoesResult {
    hits?: Nullable<Nullable<Instituicao>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    estimatedTotalHits?: Nullable<number>;
}

export abstract class IQuery {
    abstract instituicao(sigla: string): Nullable<Instituicao> | Promise<Nullable<Instituicao>>;

    abstract searchInstituicoes(query?: Nullable<string>, limit?: Nullable<number>, offset?: Nullable<number>): Nullable<SearchInstituicoesResult> | Promise<Nullable<SearchInstituicoesResult>>;
}

type Nullable<T> = T | null;
