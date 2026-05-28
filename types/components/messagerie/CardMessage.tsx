import { Message } from "@/types/database/message";

export type CardMessageProps = {
  message: Message;
  IsMine: boolean;
  formatDate: (date: string) => string;
};