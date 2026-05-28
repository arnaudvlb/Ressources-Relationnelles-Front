
import styles from "@/components/Messagerie/Page.module.css";
export default function MessagerieHeader(){

    return(
         <section className={styles.messagesHeader}>
        <h1>Messagerie</h1>
        <p>Retrouvez vos amis et continuez vos conversations.</p>
      </section>
    )
}