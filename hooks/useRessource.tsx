import { useEffect, useState } from "react";
import getRessource from "@/services/getRessource";
import { Ressource } from "@/types/database/ressources";

export function useRessource(id: string) {
    const [resource, setResource] = useState<Ressource | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getRessource(id)
            .then((data) => setResource(data))
            .catch((err) => setError(err?.message ?? "Erreur inconnue"))
            .finally(() => setLoading(false));
    }, [id]);

    return { resource, loading, error };
}