import { Adorer } from "@/types/database/adorers";
import { Categorie } from "@/types/database/categories";
import { Tag } from "@/types/database/tags";

export type AsideProps = {
  adorers: number;
  partages: number;
  tagsRessources: Tag[];
  categories: Categorie[];
};