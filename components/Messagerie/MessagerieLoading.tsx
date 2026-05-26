
import styles from "@/components/Messagerie/Page.module.css";


export default function MessagerieLoading(){

    return(
         <main className={styles.messagesPage}>
        <section className={styles.emptyState}>
          <h1>Messagerie</h1>
          <p>Chargement des conversations...</p>
        </section>
      </main>
    )
}