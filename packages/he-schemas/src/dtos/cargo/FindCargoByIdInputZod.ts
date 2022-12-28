import { z } from "zod";
import { IdZod } from "../../utils";

export const FindCargoByIdInputZod = z.object({
  id: IdZod,
});

export type IFindCargoByIdInput = z.infer<typeof FindCargoByIdInputZod>;
