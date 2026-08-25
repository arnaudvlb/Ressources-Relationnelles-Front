import { apiFetch } from "../apiFetch";

export default async function deleteCommentaire(id: number | null): Promise<void> {
  const res = await apiFetch(`/api/commentaires/${id}`, {
    method: "DELETE",
  });
}