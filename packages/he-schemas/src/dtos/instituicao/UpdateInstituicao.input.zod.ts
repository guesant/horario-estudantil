import { CreateInstituicaoInputZod } from "./CreateInstituicao.input.zod";
import { z } from "zod";

export const UpdateInstituicaoInputZod = CreateInstituicaoInputZod.pick({
  nome: true,
  sigla: true,
  apelido: true,
}).partial();

export type IUpdateInstituicaoInput = z.infer<typeof UpdateInstituicaoInputZod>;
