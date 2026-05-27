
import styles from "@/components/Messagerie/Page.module.css";
import { MessagerieErrorProps } from "@/types/components/messagerie/MessagerieErrorProps"



export default function MessagerieError({error}:Readonly<MessagerieErrorProps>){
    return(
         <main className={styles.messagesPage}>
        <section className={styles.emptyState}>
          <h1>Messagerie</h1>
          <p>Erreur : {error}</p>
        </section>
      </main>
    )
}