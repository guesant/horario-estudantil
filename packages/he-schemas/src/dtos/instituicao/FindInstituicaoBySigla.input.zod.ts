import { z } from "zod";
import { CreateInstituicaoInputZod } from "./CreateInstituicao.input.zod";

export const FindInstituicaoBySiglaInputZod = z.object({
  sigla: CreateInstituicaoInputZod.shape.sigla,
});

export type IFindInstituicaoBySiglaInput = z.infer<
  typeof FindInstituicaoBySiglaInputZod
>;
