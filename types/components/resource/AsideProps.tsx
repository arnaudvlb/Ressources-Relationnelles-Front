import { Categorie } from "@/types/database/categories";
import { Tag } from "@/types/database/tags";

export type AsideProps = {
  tagsRessources: Tag[];
  categories: Categorie[];
};