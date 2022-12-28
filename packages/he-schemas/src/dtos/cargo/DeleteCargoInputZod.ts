import { z } from "zod";
import { IdZod } from "../../utils";

export const DeleteCargoInputZod = z.object({
  id: IdZod,
});

export type IDeleteCargoInput = z.infer<typeof DeleteCargoInputZod>;
