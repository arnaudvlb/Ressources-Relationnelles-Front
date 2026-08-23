import { Commentaire } from "@/types/database/commentaires";
import { apiFetch } from "../apiFetch";

export default async function createCommentaire(
  contenu: string,
  dateCreation: string,
  utilisateur: string,
  resource: string,
  commentaireParent: string | null
): Promise<Commentaire> {
  const res = await apiFetch("/api/commentaires", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify({
      contenu,
      dateCreation,
      utilisateur,
      resource,
      commentaireParent
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

  const data: Commentaire = await res.json();

  return data;
}
