import { Categorie } from "./categories";
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
  commentaires: string[];
  tagsRessources: string[];
  utilisateur: string;

  dateCreation: string;
  estVisible: boolean;
  valide: boolean;
  visibilite: string;
};
