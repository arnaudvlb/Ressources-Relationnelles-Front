export default async function deleteAdorerAPI(id: number): Promise<void> {
  const res = await fetch(`/api/adorers/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}