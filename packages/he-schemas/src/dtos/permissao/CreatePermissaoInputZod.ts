import { z } from "zod";

export const CreatePermissaoInputZod = z.object({
  receita: z.string().max(2000),
});

export type ICreatePermissaoInput = z.infer<typeof CreatePermissaoInputZod>;
