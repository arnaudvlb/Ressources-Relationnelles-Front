import { apiFetch } from "../apiFetch";

export default async function deleteAdorerAPI(id: number): Promise<void> {
  const res = await apiFetch(`/api/adorers/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}