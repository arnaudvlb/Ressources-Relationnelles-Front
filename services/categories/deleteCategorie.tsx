import { apiFetch } from "../apiFetch";

export default async function deleteCategorie(id: number | null): Promise<void> {
  const res = await apiFetch(`/api/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}