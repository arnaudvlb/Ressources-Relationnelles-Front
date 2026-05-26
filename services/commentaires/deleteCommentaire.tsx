export default async function deleteCommentaire(id: number | null): Promise<void> {
  const res = await fetch(`/api/commentaires/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
}