import { Categorie } from "@/types/database/categories";
import { apiFetch } from "../apiFetch";

type Collection<T> = {
  member?: T[];
  "hydra:member"?: T[];
};

export default async function getCategories(): Promise<Categorie[]> {
  const res = await apiFetch("/api/categories");
  if (!res.ok) throw new Error(`Erreur API: ${res.status}`);

  const data: Collection<Categorie> = await res.json();
  const items = data.member ?? data["hydra:member"] ?? [];

  return items;
}