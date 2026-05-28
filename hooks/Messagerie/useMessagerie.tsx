import { useMemo } from "react";
import { useAmis } from "@/hooks/amis/useAmis";
import { useMessages } from "@/hooks/message/useMessage";
import { Ami } from "@/types/database/amis";
import { Conversation } from "@/types/components/messagerie/Conversation";
import { User } from "@/types/database/users";

export function useMessagerie(currentUserId: number | null) {
  const {
    amis,
    loading: loadingAmis,
    error: errorAmis,
    refreshAmis,
  } = useAmis();

  const {
    messages,
    setMessages,
    loading: loadingMessages,
    error: errorMessages,
    refreshMessages,
  } = useMessages();

  const conversations = useMemo(() => {
    if (!currentUserId) return [];

    const conversationsList = amis
      .map((relation: Ami): Conversation | null => {
        const demandeurId = relation.demandeur?.id;
        const amiId = relation.ami?.id;

        if (!demandeurId || !amiId) return null;

        const friendUser =
          demandeurId === currentUserId ? relation.ami : relation.demandeur;

        if (!friendUser?.id) return null;

        const messagesWithFriend = messages.filter((message) => {
          const expediteur = message.expediteur as User;
          const destinataire = message.destinataire as User;

          const expediteurId = expediteur?.id;
          const destinataireId = destinataire?.id;

          return (
            (expediteurId === currentUserId &&
              destinataireId === friendUser.id) ||
            (expediteurId === friendUser.id &&
              destinataireId === currentUserId)
          );
        });

        const sortedMessages = [...messagesWithFriend].sort((a, b) => {
          const dateA = new Date(a.dateEnvoi).getTime();
          const dateB = new Date(b.dateEnvoi).getTime();

          return dateB - dateA;
        });

        return {
          user: friendUser,
          lastMessage: sortedMessages[0] ?? null,
        };
      })
      .filter((conversation): conversation is Conversation => {
        return conversation !== null;
      });

    return conversationsList.sort((a, b) => {
      const dateA = a.lastMessage
        ? new Date(a.lastMessage.dateEnvoi).getTime()
        : 0;

      const dateB = b.lastMessage
        ? new Date(b.lastMessage.dateEnvoi).getTime()
        : 0;

      return dateB - dateA;
    });
  }, [amis, messages, currentUserId]);

  async function refreshMessagerie() {
    await Promise.all([refreshAmis(), refreshMessages()]);
  }

  return {
    amis,
    messages,
    setMessages,
    conversations,
    loading: loadingAmis || loadingMessages,
    error: errorAmis ?? errorMessages,
    refreshMessagerie,
  };
}