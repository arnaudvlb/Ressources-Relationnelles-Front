import { apiFetch } from "../apiFetch";

export default async function deleteFavoriAPI(id: number): Promise<void> {
  const res = await apiFetch(`/api/favoris/${id}`, {
    method: "DELETE",
  });
}