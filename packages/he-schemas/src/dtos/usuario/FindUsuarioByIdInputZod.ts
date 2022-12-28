import { z } from "zod";
import { IdZod } from "../../utils";

export const FindUsuarioByIdInputZod = z.object({
  id: IdZod,
});

export type IFindUsuarioByIdInput = z.infer<typeof FindUsuarioByIdInputZod>;
