import { z } from "zod";
import { IdZod } from "../../utils";

export const AddPermissaoToCargoInputZod = z.object({
  cargoId: IdZod,
  permissaoId: IdZod,
});

export type IAddPermissaoToCargoInput = z.infer<
  typeof AddPermissaoToCargoInputZod
>;
