import { User } from "@/types/database/users";
import { apiFetch } from "../apiFetch";

export default async function putUtilisateur(
  id: string,
  nom: string,
  prenom: string,
  telephone: string,
  email: string,
  pseudo: string,
  photoProfil: string,
  statusCompte: boolean,
  dateCreation: string,
  role: string,
  plainPassword: string
): Promise<User> {
  const res = await apiFetch(`/api/utilisateurs/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify({
      nom,
      prenom,
      telephone,
      email,
      pseudo,
      photoProfil,
      statusCompte,
      dateCreation,
      role,
      plainPassword
    }),
  });

  if (!res.ok) {
    if (res.status === 400) {
      throw new Error(
        "Données invalides. (Veuillez remplir l'email et le mot de passe.)",
      );
    } else if (res.status === 403) {
      throw new Error("Accès non autorisé.");
    } else if (res.status === 404) {
      throw new Error("Ressource introuvable.");
    } else {
      throw new Error(`Erreur API: ${res.status}`);
    }
  }

  const data: User = await res.json();

  return data;
}
