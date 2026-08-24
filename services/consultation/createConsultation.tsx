import { apiFetch } from "../apiFetch";

export type CreateConsultationPayload = {
  utilisateur: string | null;
  resource: string;
};

export default async function createConsultation(
  payload: CreateConsultationPayload
): Promise<any> {
  const res = await apiFetch("/api/consultations", {
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