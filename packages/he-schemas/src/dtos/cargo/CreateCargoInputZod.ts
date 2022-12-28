import { z } from "zod";

export const CreateCargoInputZod = z.object({});

export type ICreateCargoInput = z.infer<typeof CreateCargoInputZod>;
