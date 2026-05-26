import { Commentaire } from "@/types/database/commentaires";

export type CommentProps = {
  commentaires: Commentaire[];
  ressourceId: number;
};