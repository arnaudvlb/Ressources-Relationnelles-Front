import { UtilisateurViewProps } from "@/types/components/UtilisateurViewProps";
import styles from "./UtilisateurView.module.css";
import EditButton from "../ui/EditButton/EditButton";

export default function UtilisateurView({
  utilisateur,
  id,
}: UtilisateurViewProps) {
    console.log(utilisateur?.statusCompte)
  return (
    <section className={styles.userCard}>
      <h2 className={styles.userTitle}>
        {utilisateur?.prenom} {utilisateur?.nom}
      </h2>

      <div className={styles.userInfo}>
        <p>
          <span>Téléphone</span>
          {utilisateur?.telephone}
        </p>

        <p>
          <span>Email</span>
          {utilisateur?.email}
        </p>

        <p>
          <span>Statut du compte</span>
          {utilisateur?.statusCompte == true ? "Actif" : "Désactivé"}
        </p>

        <p>
          <span>Date de création</span>
          {utilisateur?.dateCreation ? new Date(utilisateur.dateCreation).toLocaleDateString("Fr-fr") : ""}
        </p>

        <div className={styles.userActions}>
            <EditButton url={`/utilisateur/edit/${id}`}/>
        </div>
      </div>
    </section>
  );
}