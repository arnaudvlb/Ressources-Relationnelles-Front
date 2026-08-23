import { Categorie } from "@/types/database/categories";
import { apiFetch } from "../apiFetch";

export default async function getCategorie(
  id: string
): Promise<Categorie> {
  const res = await apiFetch(`/api/categories/${id}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  const data: Categorie = await res.json();

  return data;
}