import { Conversation } from "@/types/components/messagerie/Conversation";

export type MessagerieListConvProps = {
  conversations: Conversation[];
  selectedUserId: number | null;
  setSelectedUserId: (userId: number | null) => void;
  getAvatarLetter: (user: Conversation["user"]) => string;
  formatDate: (date: string) => string;
};