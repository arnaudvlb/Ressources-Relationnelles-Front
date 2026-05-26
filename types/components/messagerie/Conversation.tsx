import { Message } from "@/types/database/message";
import { User } from "@/types/database/users";

export type Conversation = {
  user: User;
  lastMessage: Message | null;
};