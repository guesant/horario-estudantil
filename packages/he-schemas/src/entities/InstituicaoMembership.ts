import { Instituicao } from "./Instituicao";
import { User } from "./User";

export type InstituicaoMembership = {
  id: number;

  usuario: User;

  instituicao: Instituicao;
};
