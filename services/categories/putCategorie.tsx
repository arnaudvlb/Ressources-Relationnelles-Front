import { Categorie } from "@/types/database/categories";

export default async function putCategorie(
  id: string,
  libelle: string,
  categorie: string,
): Promise<Categorie> {
  const res = await fetch(`/api/categories/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/merge-patch+json",
    },
    body: JSON.stringify({
      libelle,
      categorie,
    }),
  });

  if (!res.ok) {
    if (res.status === 400) {
      throw new Error("Données invalides.");
    } else if (res.status === 403) {
      throw new Error("Accès non autorisé.");
    } else if (res.status === 404) {
      throw new Error("Ressource introuvable."); 
    } else if (res.status === 500) {
      throw new Error("Veuillez compléter le formulaire.");
    } else {
      throw new Error(`Erreur API: ${res.status}`);
    }
  }

  const data: Categorie = await res.json();

  return data;
}
