import { User } from "@/types/database/users";
import { Ressource } from "./ressources";

export type Commentaire = {
  id: number;
  contenu: string;
  dateCreation: string;
  utilisateur: User;
  ressource: Ressource;
  commentaireParentId: number | null;
};
