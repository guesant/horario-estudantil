import { Cargo } from "./Cargo";

export type Usuario = {
  id: number;

  keycloakId: string | null;

  cargo: Cargo | null;
};
