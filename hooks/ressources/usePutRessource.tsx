import { useState } from "react";
import putRessourceService from "@/services/ressources/putRessource";
import { Ressource } from "@/types/database/ressources";

type FormData = {
  titre: string;
  contenu: string;
  estVisible: boolean;
  visibilite: string;
};

export function usePutRessource(id: string) {
  const [data, setData] = useState<Ressource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const putRessource = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await putRessourceService(
        id,
        formData.titre,
        formData.contenu,
        formData.estVisible,
        formData.visibilite,
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

  return { data, loading, error, putRessource };
}
