import { Dispatch, SetStateAction } from "react";

export type ConversationFormProps = {
  handleSendMessage: () => void | Promise<void>;
  messageContent: string;
  setMessageContent: Dispatch<SetStateAction<string>>;
  sending: boolean;
  createMessageError: string | null;
};