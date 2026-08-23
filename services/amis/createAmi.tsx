import { Ami } from "@/types/database/amis";
import { apiFetch } from "../apiFetch";

export type CreateAmiPayload = {
  statut: string;
  dateAction: string;
  demandeur: number;
  ami: number;
};



export default async function createAmi(
  payload: CreateAmiPayload
): Promise<Ami> {
  const res = await apiFetch("/api/amis", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}