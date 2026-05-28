import { useState } from "react";
import deleteRessourceService from "@/services/ressources/deleteRessource";

export function useDeleteRessource(id: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteRessource = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteRessourceService(id);
      return true;
    } catch (err: any) {
      setError(err?.message ?? "Erreur inconnue");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteRessource, loading, error };
}