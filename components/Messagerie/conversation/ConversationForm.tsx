
import styles from "@/components/Resource/Page/Page.module.css";
import { ConversationFormProps } from "@/types/components/messagerie/ConversationForm";

export default function ConversationForm({
  handleSendMessage,
  messageContent,
  setMessageContent,
  sending,
  createMessageError,
}: ConversationFormProps) {
  return (
    <>
      <form
        className={styles.messageForm}
        onSubmit={(event) => {
          event.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          value={messageContent}
          onChange={(event) => setMessageContent(event.target.value)}
          placeholder="Écrire un message..."
        />

        <button type="submit" disabled={sending || !messageContent.trim()}>
          {sending ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {createMessageError && (
        <p className={styles.formError}>{createMessageError}</p>
      )}
    </>
  );
}