import { z } from "zod";
import { IdZod } from "../../utils";

export const DeleteInstituicaoInputZod = z.object({
  id: IdZod,
});