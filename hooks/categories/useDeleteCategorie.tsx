import { useState } from "react";
import deleteCategorieService from "@/services/categories/deleteCategorie"; 

export function useDeleteCategorie(id: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteCategorie = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteCategorieService(id);
      return true;
    } catch (err: any) {
      setError(err?.message ?? "Erreur inconnue");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategorie, loading, error };
}