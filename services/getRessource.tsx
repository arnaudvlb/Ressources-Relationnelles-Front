import { Ressource } from "@/types/database/ressources";

export default async function getRessource(
  id: string
): Promise<Ressource> {
  const res = await fetch(`/api/ressources/${id}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  const data: Ressource = await res.json();

  return data;
}