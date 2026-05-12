import { Ressource } from "./ressources";
import { User } from "./users";

export type Partage = {
  id: number;
  datePartage: string;
  utilisateur: User;
  utilisateur2: User;
  ressource: Ressource;
};