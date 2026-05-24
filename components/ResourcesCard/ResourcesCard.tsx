"use client";

import { ResourcesCardProps } from "@/types/components/ResourcesCardProps";
import Link from "next/link";
import styles from "@/components/ResourcesCard/ResourcesCard.module.css";

export default function ResourcesCard({ resources }: Readonly<ResourcesCardProps>) {
  return (
    <div className={styles.cardGrid}>
      {resources.map((resource) => (
        <article key={resource.id} className={styles.card}>
          <Link href={`/resource/${resource.id}`} className={styles.cardContent}>
            <span
              className={styles.cardLibelleCategorie}
              style={{ color: resource.categories[0].couleur }}
            >
              {resource.categories[0].libelle}
            </span>

            <h2 className={styles.cardTitre}>{resource.titre}</h2>

            <p className={styles.cardContenu}>{resource.contenu}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
