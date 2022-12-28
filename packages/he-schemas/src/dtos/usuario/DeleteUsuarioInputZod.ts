import { z } from "zod";
import { IdZod } from "../../utils";

export const DeleteUsuarioInputZod = z.object({
  id: IdZod,
});

export type IDeleteUsuarioInput = z.infer<typeof DeleteUsuarioInputZod>;
