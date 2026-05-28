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

  console.log("Token createAdorer :", token);
  console.log("Payload createAdorer :", payload);

  const res = await fetch("/api/adorers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  console.log("Status createAdorer :", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.log("Erreur createAdorer :", errorText);

    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}