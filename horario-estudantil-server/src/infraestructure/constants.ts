export const DATA_SOURCE = Symbol();
export const OPENID_CLIENT = Symbol();
export const MEILISEARCH_CLIENT = Symbol();

//

export const REPOSITORY_APELIDO = Symbol();
export const REPOSITORY_PERIODO_LETIVO = Symbol();
export const REPOSITORY_AULA_PROFESSOR = Symbol();
export const REPOSITORY_PROFESSOR = Symbol();
export const REPOSITORY_AULA = Symbol();
export const REPOSITORY_SEMANA = Symbol();
export const REPOSITORY_AULA_TURMA = Symbol();
export const REPOSITORY_TURMA = Symbol();
export const REPOSITORY_ETAPA = Symbol();
export const REPOSITORY_UNIDADE_ESTUDANTIL = Symbol();
export const REPOSITORY_EVENTO = Symbol();
export const REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP = Symbol();
export const REPOSITORY_CATEGORIA_TURMA = Symbol();
export const REPOSITORY_USUARIO = Symbol();
export const REPOSITORY_MATERIA = Symbol();

//

export const IS_PUBLIC_KEY = Symbol();

//

export const IS_PRODUCTION_MODE = process.env.NODE_ENV === 'production';
