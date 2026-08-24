import { Adorer } from "@/types/database/adorers";
import { apiFetch } from "../apiFetch";

export type CreateAdorerPayload = {
  dateAdorer: string;
  utilisateur: string;
  resource: string;
};

export default async function createAdorer(
  payload: CreateAdorerPayload
): Promise<Adorer> {

  const res = await apiFetch("/api/adorers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}