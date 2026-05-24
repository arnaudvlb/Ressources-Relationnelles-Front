import { useEffect, useState } from "react";
import getRessources from "@/services/resources/getRessources";
import { Ressource } from "@/types/database/ressources";

export function useRessources() {
    const [resources, setResources] = useState<Ressource[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getRessources()
            .then((data) => setResources(Array.isArray(data) ? data : []))
            .catch((err) => setError(err?.message ?? "Erreur inconnue"))
            .finally(() => setLoading(false));
    }, []);

    return { resources, loading, error };
}