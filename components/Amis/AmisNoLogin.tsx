import styles from "@/components/Amis/Page.module.css";

export default function AmisNoLogin(){
    return(
        <main className={styles.friendsPage}>
        <section className={styles.emptyState}>
          <h1>Ajouter des amis</h1>
          <p>Vous devez être connecté pour ajouter des amis.</p>
        </section>
      </main>
    )
}