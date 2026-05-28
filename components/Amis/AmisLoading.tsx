
import styles from "@/components/Amis/Page.module.css";
export default function AmisLoading(){

    return(
        <main className={styles.friendsPage}>
        <section className={styles.emptyState}>
          <h1>Ajouter des amis</h1>
          <p>Chargement des utilisateurs...</p>
        </section>
      </main>
    )
}