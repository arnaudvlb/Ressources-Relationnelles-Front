import { apiFetch } from "../apiFetch";


export default async function deleteAmiAPI(id: number): Promise<void> {
  const res = await apiFetch(`/api/amis/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}