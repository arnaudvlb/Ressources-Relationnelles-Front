import { Ressource } from "./ressources";
import { User } from "./users";

export type Favori = {
  id: number;
  utilisateur: User;
  resource: Ressource;
};