import { Message } from "@/types/database/message";

export type CreateMessagePayload = {
  contenu: string;
  pieceJointe?: string | null;
  dateEnvoie: string;
  id_expediteur: number;
  id_destinataire: number;
};

export default async function createMessage(
  payload: CreateMessagePayload
): Promise<Message> {
  console.log("📤 createMessage payload :", payload);

  const response = await fetch("/api/messages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(payload),
  });

  console.log("createMessage status :", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log(" Erreur API createMessage :", errorText);

    throw new Error("Impossible d’envoyer le message.");
  }

  const data = await response.json();

  console.log("Message créé :", data);

  return data;
}