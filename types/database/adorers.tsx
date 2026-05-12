import { Ressource } from "./ressources";
import { User } from "./users";

export type Adorer = {
  id: number;
  dateAdorer: string;
  utilisateur: User;
  ressource: Ressource;
};
