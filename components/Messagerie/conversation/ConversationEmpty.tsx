


import styles from "@/components/Resource/Page/Page.module.css"
export default function ConversationEmpty(){
    return(
          <div className={styles.noConversation}>
              <h2>Sélectionnez une conversation</h2>
              <p>
                Choisissez un ami dans la liste pour consulter ou envoyer des
                messages.
              </p>
            </div>
    )
}