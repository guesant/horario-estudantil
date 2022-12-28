import { z } from "zod";
import { IdZod } from "../../utils";

export const FindPermissaoByIdInputZod = z.object({
  id: IdZod,
});

export type IFindPermissaoByIdInput = z.infer<typeof FindPermissaoByIdInputZod>;
