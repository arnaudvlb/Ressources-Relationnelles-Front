import { useState } from "react";
import putUtilisateurService from "@/services/utilisateurs/putUtilisateur";
import { User } from "@/types/database/users";

type FormData = {
  nom: string;
  prenom: string;
  email: string | null;
  role: string;
  password: string | null;
};

export function usePutUtilisateur(id: string) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const putUtilisateur = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await putUtilisateurService(
        id,
        formData.nom,
        formData.prenom,
        formData.email,
        formData.role,
        formData.password,
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

  return { data, loading, error, putUtilisateur };
}
