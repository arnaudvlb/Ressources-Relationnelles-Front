import { useEffect, useState } from "react";
import getCategorie from "@/services/categories/getCategorie";
import { Categorie } from "@/types/database/categories";

export function useCategorie(id: string) {
    const [categorie, setCategorie] = useState<Categorie | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCategorie(id)
            .then((data) => setCategorie(data))
            .catch((err) => setError(err?.message ?? "Erreur inconnue"))
            .finally(() => setLoading(false));
    }, [id]);

    return { categorie, loading, error };
}