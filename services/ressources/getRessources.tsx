import { Ressource } from "@/types/database/ressources";
import { apiFetch } from "../apiFetch";

type Collection<T> = {
  member?: T[];
  "hydra:member"?: T[];
};

export default async function getRessources(): Promise<Ressource[]> {
  const res = await apiFetch("/api/ressources");
  if (!res.ok) throw new Error(`Erreur API: ${res.status}`);

  const data: Collection<Ressource> = await res.json();
  const items = data.member ?? data["hydra:member"] ?? [];

  return items;
}