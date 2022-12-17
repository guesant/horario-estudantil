import { CreateInstituicaoInputZod } from "./CreateInstituicao.input.zod";

export const UpdateInstituicaoInputZod = CreateInstituicaoInputZod.pick({
  nome: true,
  sigla: true,
  apelido: true,
}).partial();
