import { Ressource } from "@/types/database/ressources";

export default async function putRessource(
  id: string,
  titre: string,
  contenu: string,
  estVisible: boolean,
  visibilite: string,
): Promise<Ressource> {
  const res = await fetch(`/api/ressources/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/merge-patch+json",
    },
    body: JSON.stringify({
      titre,
      contenu,
      estVisible,
      visibilite,
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

  const data: Ressource = await res.json();

  return data;
}
