import { Message } from "@/types/database/message";
import { apiFetch } from "../apiFetch";


export default async function getMessages(): Promise<Message[]> {
 const res = await apiFetch("/api/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Impossible de récupérer les messages.");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.member ?? data["hydra:member"] ?? [];
}