
import styles from "@/components/Amis/Page.module.css";
import { AmisErrorProps } from "@/types/components/amis/AmisErrorProps";


export default function AmisError({error}:AmisErrorProps){

    return(
        <main className={styles.friendsPage}>
        <section className={styles.emptyState}>
          <h1>Ajouter des amis</h1>
          <p>Erreur : {error}</p>
        </section>
      </main>
    )
}