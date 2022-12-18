import { CreateTurmaInputZod } from "./CreateTurma.input.zod";
import { z } from "zod";

export const UpdateTurmaInputZod = CreateTurmaInputZod.pick({}).partial();

export type IUpdateTurmaInput = z.infer<typeof UpdateTurmaInputZod>;
