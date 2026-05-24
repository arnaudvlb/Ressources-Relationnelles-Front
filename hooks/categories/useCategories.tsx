import { useEffect, useState } from "react";
import getCategories from "@/services/categories/getCategories";
import { Categorie } from "@/types/database/categories";

export function useCategories() {
    const [categories, setCategories] = useState<Categorie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCategories()
            .then((data) => setCategories(Array.isArray(data) ? data : []))
            .catch((err) => setError(err?.message ?? "Erreur inconnue"))
            .finally(() => setLoading(false));
    }, []);

    return { categories, loading, error };
}