import { Adorer } from "@/types/database/adorers";

export type CreateAdorerPayload = {
  dateAdorer: string;
  utilisateur: string;
  resource: string;
};

export default async function createAdorer(
  payload: CreateAdorerPayload
): Promise<Adorer> {
  const token = localStorage.getItem("token");

  const res = await fetch("/api/adorers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}