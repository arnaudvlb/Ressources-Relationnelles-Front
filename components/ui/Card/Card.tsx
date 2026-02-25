"use client";

import { CardProps } from "@/types/components/CardProps";
import styles from "@/components/ui/Card/Card.module.css";

export default function Card({ resources }: CardProps) {
  return (
    <div className={styles.cardGrid}>
      {resources.map((resource) => (
        <article key={resource.id} className={styles.card}>
          <div className={styles.cardContent}>
            <span className={styles.cardLibelleCategorie}>
              {resource.libelleCategorie}
            </span>

            <h2 className={styles.cardTitre}>{resource.titre}</h2>

            <p className={styles.cardContenu}>{resource.contenu}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
