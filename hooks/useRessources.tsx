import { useEffect, useState } from "react";
import { Ressource } from "@/types/database/ressources";
import getRessources from "@/services/getRessources";

export function useRessources() {
  const [resources, setResources] = useState<Ressource[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRessources()
      .then(setResources)
      .catch(err => setError(err.message));
  }, []);

  return { resources, error };
}