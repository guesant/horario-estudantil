import { z } from "zod";
import { CreateUsuarioInputZod } from "./CreateUsuarioInputZod";
import { IdZod } from "../../utils";

export const UpdateUsuarioInputZod = z.intersection(
  z.object({
    id: IdZod,
  }),
  CreateUsuarioInputZod.pick({
    cargoId: true,
  }).partial()
);

export type IUpdateUsuarioInput = z.infer<typeof UpdateUsuarioInputZod>;
