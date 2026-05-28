import { Conversation } from "@/types/components/messagerie/Conversation";

export type ConversationHeaderProps = {
  setSelectedUserId: (userId: number | null) => void;
  selectedConversation: Conversation;
  getAvatarLetter: (user: Conversation["user"]) => string;

};