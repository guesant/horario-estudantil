import { z } from "zod";
import { IdZod } from "../../utils";

export const RemovePermissaoToCargoInputZod = z.object({
  cargoId: IdZod,
  permissaoId: IdZod,
});

export type IRemovePermissaoToCargoInput = z.infer<
  typeof RemovePermissaoToCargoInputZod
>;
