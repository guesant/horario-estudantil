import { z } from "zod";
import { CreatePermissaoInputZod } from "./CreatePermissaoInputZod";
import { IdZod } from "../../utils";

export const UpdatePermissaoInputZod = z.intersection(
  z.object({
    id: IdZod,
  }),
  CreatePermissaoInputZod.pick({
    receita: true,
  }).partial()
);

export type IUpdatePermissaoInput = z.infer<typeof UpdatePermissaoInputZod>;
