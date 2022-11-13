
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
    categoriaTurmaPai?: Nullable<CategoriaTurma>;
    unidadeEstudantil?: Nullable<UnidadeEstudantil>;
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
    unidadeEstudantil?: Nullable<UnidadeEstudantil>;
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

export class UnidadeEstudantilMembership {
    id?: Nullable<string>;
    usuario?: Nullable<Usuario>;
    unidadeEstudantil?: Nullable<UnidadeEstudantil>;
}

export class UnidadeEstudantil {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    sigla?: Nullable<string>;
    apelido?: Nullable<string>;
    memberships: Nullable<UnidadeEstudantilMembership>[];
    categoriasTurma: Nullable<CategoriaTurma>[];
    periodosLetivos: Nullable<PeriodoLetivo>[];
}

export class Usuario {
    id?: Nullable<string>;
    nome?: Nullable<string>;
    memberships?: Nullable<Nullable<UnidadeEstudantilMembership>[]>;
}

export abstract class IQuery {
    abstract unidadeEstudantil(sigla: string): Nullable<UnidadeEstudantil> | Promise<Nullable<UnidadeEstudantil>>;

    abstract unidadesEstudantis(): Nullable<Nullable<UnidadeEstudantil>[]> | Promise<Nullable<Nullable<UnidadeEstudantil>[]>>;
}

type Nullable<T> = T | null;
