import { Ressource } from "@/types/database/ressources";

export default async function createRessource(
  titre: string,
  contenu: string,
  valide: boolean,
  date_creation: string,
  visibilite: string,
  utilisateur: number,
  categorie: string,
  tags: string[],
): Promise<Ressource> {
  const res = await fetch("/api/ressources", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify({
      titre,
      contenu,
      valide,
      date_creation,
      visibilite,
      utilisateur,
      categorie,
      tags,
    }),
  });
  console.log(
      "titre:" + titre,
      "contenu:" + contenu,
      "valide:" + valide,
      "date_creation:" + date_creation,
      "visibilite:" + visibilite,
      "utilisateur:" + utilisateur,
      "categorie:" + categorie,
      "tags:" + tags,)
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

  const data: Ressource = await res.json();

  return data;
}
