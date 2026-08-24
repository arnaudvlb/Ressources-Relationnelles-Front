import { apiFetch } from "../apiFetch";

export type CreateFavoriPayload = {
  utilisateur: string;
  resource: string;
};

export default async function createFavori(
  payload: CreateFavoriPayload
): Promise<any> {
  const res = await apiFetch("/api/favoris", {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}