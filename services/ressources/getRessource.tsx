import { Ressource } from "@/types/database/ressources";
import { apiFetch } from "../apiFetch";

export default async function getRessource(
  id: string
): Promise<Ressource> {
  const res = await apiFetch(`/api/ressources/${id}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  const data: Ressource = await res.json();

  return data;
}