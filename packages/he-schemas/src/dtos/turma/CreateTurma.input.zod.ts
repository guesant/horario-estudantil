import {z} from "zod";
import {ApelidoTextoZod} from "../apelido";
import {IdZod} from "../../utils";

export const CreateTurmaInputZod = z.object({
  instituicaoId: IdZod,

  nome: ApelidoTextoZod,
});

export type ICreateTurmaInput = z.infer<typeof CreateTurmaInputZod>