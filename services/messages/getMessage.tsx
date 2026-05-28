import { Message } from "@/types/database/message";


export default async function getMessages(): Promise<Message[]> {
 const res = await fetch("/api/messages", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Impossible de récupérer les messages.");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.member ?? data["hydra:member"] ?? [];
}