import { Categorie } from "@/types/database/categories";

export default async function getCategorie(
  id: string
): Promise<Categorie> {
  const res = await fetch(`/api/categories/${id}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  const data: Categorie = await res.json();

  return data;
}