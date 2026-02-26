import { Ressource } from "@/types/database/ressources";

export default async function getRessources(): Promise<Ressource[]> {
  const response = await fetch("/api/ressources");

  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération des ressources (getRessources) : ${response.status}`);
  }

  const data = await response.json();

  return data;
}