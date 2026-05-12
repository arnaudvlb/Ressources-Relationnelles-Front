"use client";

import styles from "@/components/Resource/Aside/Aside.module.css";
import { AsideProps } from "@/types/components/resource/AsideProps";

export default function Aside({ tagsRessources, categories }: AsideProps) {
  return (
    <aside className={styles.resourceAside}>
      <div className={styles.resourceCard}>
        <strong>Tags</strong>
        <div className={styles.tags}>
          {tagsRessources.map((tag, i) => (
            <span key={i} className={styles.tag} style={{ color: tag.couleur }}>
              #{tag.libelle}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.resourceCard}>
        <strong>Catégories</strong>
        {categories.map((categorie, i) => (
          <p key={i} style={{ color: categorie.couleur }}>
            {categorie.libelle}
          </p>
        ))}
      </div>
    </aside>
  );
}
