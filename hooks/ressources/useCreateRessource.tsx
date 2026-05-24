import { useState } from "react";
import createRessourceService from "@/services/ressources/createRessource";
import { Ressource } from "@/types/database/ressources";

type FormData = {
  titre: string;
  contenu: string;
  estVisible: boolean;
};

export function useCreateRessource() {
  const [data, setData] = useState<Ressource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRessource = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await createRessourceService(
        formData.titre,
        formData.contenu,
        formData.estVisible
      );

      setData(result);

      return result;
    } catch (err: any) {
      setError(err?.message ?? "Erreur inconnue");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, createRessource };
}