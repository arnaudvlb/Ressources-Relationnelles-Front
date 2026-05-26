import { useState } from "react";
import createMessageService from "@/services/messages/createMessage";
import { User } from "@/types/database/users";
import { Message } from "@/types/database/message";


type FormData = {
  contenu: string;
  expediteur: string;
  destinataire: string;
  pieceJointe?: string | null;
};

export function useCreateMessage() {

  const [data, setData] = useState<Message | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const createMessage = async (formData: FormData) => {
  
    setLoading(true);

    setError(null);

    try {
      
        //A Remplacer par des iri au besoin 
      const result = await createMessageService({
        contenu: formData.contenu,
        expediteur: formData.expediteur,
        destinataire: formData.destinataire,
        pieceJointe: formData.pieceJointe ?? null,
      });

   
      setData(result);

   
      return result;
    } catch (err: any) {
      
      setError(err?.message ?? "Erreur inconnue");

   
      return null;
    } finally {
      
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    createMessage,
  };
}