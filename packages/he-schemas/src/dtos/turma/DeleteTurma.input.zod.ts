import { z } from "zod";
import { IdZod } from "../../utils";

export const DeleteTurmaInputZod = z.object({
  id: IdZod,
});

export type IDeleteTurmaInput = z.infer<typeof DeleteTurmaInputZod>;
