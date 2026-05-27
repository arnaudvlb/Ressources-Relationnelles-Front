import styles from "./CategoriesCard.module.css";
import { CategoriesCardProps } from "@/types/components/CategoriesCardProps";
import EditButton from "../ui/EditButton/EditButton";
import DeleteButton from "../ui/DeleteButton/DeleteButton";
import { useDeleteCategorie } from "@/hooks/categories/useDeleteCategorie";


export default function CategoriesCard({
  categories,
}: CategoriesCardProps) {
  const { deleteCategorie } = useDeleteCategorie(0);
  return (
    <div className={styles.cardList}>
      {categories.map((categorie) => (
        <article key={categorie.id} className={styles.card}>
          <div className={styles.cardContent}>
            <div
              className={styles.colorPreview}
              style={{
                backgroundColor: categorie.couleur,
              }}
            />

            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>
                {categorie.libelle}
              </h2>

              <p className={styles.cardColor}>
                {categorie.couleur}
              </p>
            </div>
          </div>

          <div className={styles.cardActions}>
            <EditButton url={`/categorie/${categorie.id}`}/>
            <DeleteButton
            onConfirm={async () => {
                  await deleteCategorie(categorie.id);
                }}/>
          </div>
        </article>
      ))}
    </div>
  );
}