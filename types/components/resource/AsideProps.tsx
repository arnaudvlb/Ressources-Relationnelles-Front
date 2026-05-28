import { Dispatch, SetStateAction } from "react";
import { Categorie } from "@/types/database/categories";
import { Tag } from "@/types/database/tags";

export type AsideProps = {
  resourceId: number;

  adorers: number;
  favoris: number;
  partages: number;
  consultations: number;

  isLiked: boolean;
  isFavoris: boolean;

  setIsLiked: Dispatch<SetStateAction<boolean>>;
  setIsFavoris: Dispatch<SetStateAction<boolean>>;

  adorerId: number | null;
  favoriId: number | null;

  setAdorerId: Dispatch<SetStateAction<number | null>>;
  setFavoriId: Dispatch<SetStateAction<number | null>>;

  setAdorersCount: Dispatch<SetStateAction<number>>;
  setFavorisCount: Dispatch<SetStateAction<number>>;

  tags: Tag[];
  categorie: Categorie;
};