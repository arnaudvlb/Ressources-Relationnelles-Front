"use client";

import { CardProps } from "@/types/components/CardProps";
import styles from "@/components/ui/Card/Card.module.css";

export default function Card({ resources }: Readonly<CardProps>) {
  return (
    <div className={styles.cardGrid}>
      {resources.map((resource) => (
        <article key={resource.id} className={styles.card}>
          <div className={styles.cardContent}>
            <span
              className={styles.cardLibelleCategorie}
              style={{ color: resource.categories[0].couleur }}
            >
              {resource.categories[0].libelle}
            </span>

            <h2 className={styles.cardTitre}>{resource.titre}</h2>

            <p className={styles.cardContenu}>{resource.contenu}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
