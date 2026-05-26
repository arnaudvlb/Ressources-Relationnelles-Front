
import styles from "@/components/Resource/Page/Page.module.css";
import { ConversationHeaderProps } from "@/types/components/messagerie/ConversationHeader";


export default function ConversationHeader({setSelectedUserId,selectedConversation,getAvatarLetter}:ConversationHeaderProps){

    return(
         <div className={styles.conversationHeader}>
                <button
                  type="button"
                  className={styles.backMobileButton}
                  onClick={() => setSelectedUserId(null)}
                >
                  ←
                </button>

                
                {selectedConversation.user.photo_profil ? (
                  <img
                    src={selectedConversation.user.photo_profil}
                    alt=""
                    className={styles.avatar}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {getAvatarLetter(selectedConversation.user)}
                  </div>
                )}

                <div>
                  <h2>@{selectedConversation.user.pseudo}</h2>
                  <p>{selectedConversation.user.pseudo}</p>
                </div>
              </div>
    )
}