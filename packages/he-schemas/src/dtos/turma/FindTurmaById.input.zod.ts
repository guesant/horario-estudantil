import { z } from "zod";
import { IdZod } from "../../utils";

export const FindTurmaByIdInputZod = z.object({
  id: IdZod,
});

export type IFindTurmaByIdInput = z.infer<typeof FindTurmaByIdInputZod>;
