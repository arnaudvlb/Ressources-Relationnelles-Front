import { apiFetch } from "../apiFetch";

export default async function deleteCategorie(id: number | null): Promise<void> {
  const res = await apiFetch(`/api/categories/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}