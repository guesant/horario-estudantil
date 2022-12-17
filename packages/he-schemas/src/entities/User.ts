import { InstituicaoMembership } from "./InstituicaoMembership";

export type User = {
  id: number;

  keycloakId: string;

  nome: string;

  memberships: InstituicaoMembership[];
};
