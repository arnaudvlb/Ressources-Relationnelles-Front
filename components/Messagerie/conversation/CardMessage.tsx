

import styles from "@/components/Resource/Page/Page.module.css"
import { CardMessageProps } from "@/types/components/messagerie/CardMessage"

export default function CardMessage({message,IsMine,formatDate}:CardMessageProps){

    return(
        <div
            key={message.id}
            className={`${styles.messageRow} ${
                IsMine ? styles.messageRowMine : ""
            }`}
            >
            <div
                className={`${styles.messageBubble} ${
                IsMine ? styles.messageBubbleMine : ""
                }`}
            >
                <p>{message.contenu}</p>

                <span>{formatDate(message.dateEnvoi)}</span>
            </div>
            </div>
    )
}