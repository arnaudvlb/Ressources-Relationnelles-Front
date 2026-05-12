import { Ressource } from "./ressources";
import { User } from "./users";

export type Consultation = {
  id: number;
  dateConsultation: string;
  utilisateur: User;
  ressource: Ressource;
};
