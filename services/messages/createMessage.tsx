import { Message } from "@/types/database/message";
import { User } from "@/types/database/users";


type CreateMessagePayload = {
  contenu: string;
  expediteur: string;
  destinataire: string;
  pieceJointe?: string | null;
};

export default async function createMessage(
  payload: CreateMessagePayload
): Promise<Message> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/ld+json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Impossible d’envoyer le message.");
  }

  return response.json();
}