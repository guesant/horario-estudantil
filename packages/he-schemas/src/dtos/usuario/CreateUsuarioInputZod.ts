import { z } from "zod";
import { IdZod } from "../../utils";

export const CreateUsuarioInputZod = z.object({
  cargoId: IdZod,
});

export type ICreateUsuarioInput = z.infer<typeof CreateUsuarioInputZod>;
