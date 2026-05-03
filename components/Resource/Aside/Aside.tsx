"us client";

import styles from "@/components/Resource/Aside/Aside.module.css";
import { AsideProps } from "@/types/components/resource/AsideProps";

export default function Aside({
  utilisateur,
  tagsRessources,
  categories,
}: AsideProps) {
  return (
    <aside className={styles.resourceAside}>
      <div className={styles.resourceCard}>
        <strong>Auteur</strong>
        <p>{utilisateur}</p>
      </div>

      <div className={styles.resourceCard}>
        <strong>Tags</strong>
        <div className={styles.tags}>
          {tagsRessources.map((tag, i) => (
            <span key={i} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.resourceCard}>
        <strong>Catégories</strong>
        <p>{categories.map((c) => c).join(", ")}</p>
      </div>
    </aside>
  );
}
