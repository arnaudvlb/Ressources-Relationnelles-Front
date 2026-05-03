"use client";

import { HeaderProps } from "@/types/components/resource/HeaderProps";
import styles from "@/components/Resource/Header/Header.module.css";

export default function Header({
  titre,
  utilisateur,
  dateCreation,
  vues,
}: Readonly<HeaderProps>) {
  return (
    <div className={styles.resourceHeader}>
      <h1>{titre}</h1>

      <div className={styles.resourceMeta}>
        <span>Par {utilisateur}</span>
        <span>{new Date(dateCreation).toLocaleDateString()}</span>
        <span>👁️ {vues} vues</span>
      </div>
    </div>
  );
}
