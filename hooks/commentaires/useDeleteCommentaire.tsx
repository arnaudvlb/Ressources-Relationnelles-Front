import { useState } from "react";
import deleteCommentaireService from "@/services/commentaires/deleteCommentaire"; 

export function useDeleteCommentaire(id: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteCommentaire = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteCommentaireService(id);
      return true;
    } catch (err: any) {
      setError(err?.message ?? "Erreur inconnue");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteCommentaire, loading, error };
}