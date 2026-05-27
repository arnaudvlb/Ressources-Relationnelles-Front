import { User } from "./users";

export type Token = {
  id_token: number;

  token: string;

  date_expiration: string;

  dateCreation: string;

  est_revoque: boolean;

  utilisateur: User;
};
