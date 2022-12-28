import { z } from "zod";
import { IdZod } from "../../utils";

export const DeletePermissaoInputZod = z.object({
  id: IdZod,
});

export type IDeletePermissaoInput = z.infer<typeof DeletePermissaoInputZod>;
