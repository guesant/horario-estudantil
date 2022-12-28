import { z } from "zod";
import { CreateCargoInputZod } from "./CreateCargoInputZod";
import { IdZod } from "../../utils";

export const UpdateCargoInputZod = z.intersection(
  z.object({
    id: IdZod,
  }),
  CreateCargoInputZod.pick({}).partial()
);

export type IUpdateCargoInput = z.infer<typeof UpdateCargoInputZod>;
