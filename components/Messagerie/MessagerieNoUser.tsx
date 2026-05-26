
import styles from "@/components/Messagerie/Page.module.css";

export default function MessagerieNoUser() {

    return(
        <main className={styles.messagesPage}>
        <section className={styles.emptyState}>
          <h1>Messagerie</h1>
          <p>Vous devez être connecté pour accéder à la messagerie.</p>
        </section>
      </main>
    )
}