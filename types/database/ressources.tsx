import { Categorie } from "./categories";
import { Consultation } from "./consultations";
import { Media } from "./medias";
import { Tag } from "./tags";
import { Type } from "./types";
import { User } from "./users";


export type Ressource = {
  "@id": string;
  "@type": string;
  id: number;
  titre: string;
  contenu: string;

  categories: Categorie[];
  medias: string[];
  consultations: Consultation[];
  commentaires: string[];
  tagsRessources: Tag[];
  utilisateur: User;

  dateCreation: string;
  estVisible: boolean;
  valide: boolean;
  visibilite: string;
};
