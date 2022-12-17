import { z } from "zod";
import { IdZod } from "../../utils/Id.zod";
import { CreateInstituicaoInputZod } from "./CreateInstituicao.input.zod";

export const FindInstituicaoInputZod = z.union([
  z.object({
    id: IdZod,
  }),
  z.object({
    sigla: CreateInstituicaoInputZod.shape.sigla,
  }),
]);
