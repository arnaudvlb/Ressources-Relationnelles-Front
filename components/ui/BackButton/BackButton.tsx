"use client";

import Link from "next/link";
import { BackButtonProps } from "@/types/components/ui/BackButtonProps";
import styles from "@/components/ui/BackButton/BackButton.module.css";

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} className={styles.backButton}>
      <span className={styles.backIcon}>←</span>
      <span>Retour</span>
    </Link>
  );
}
