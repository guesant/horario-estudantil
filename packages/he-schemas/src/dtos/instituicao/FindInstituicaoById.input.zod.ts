import { z } from "zod";
import { IdZod } from "../../utils";

export const FindInstituicaoByIdInputZod = z.object({
  id: IdZod,
});

export type IFindInstituicaoByIdInput = z.infer<
  typeof FindInstituicaoByIdInputZod
>;
