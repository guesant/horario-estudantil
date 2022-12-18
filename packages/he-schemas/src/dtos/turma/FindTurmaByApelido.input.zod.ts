import { z } from "zod";
import { ApelidoTextoZod } from "../apelido";

export const FindTurmaByApelidoInputZod = z.object({
  apelido: ApelidoTextoZod,
});

export type IFindTurmaByApelidoInput = z.infer<
  typeof FindTurmaByApelidoInputZod
>;
