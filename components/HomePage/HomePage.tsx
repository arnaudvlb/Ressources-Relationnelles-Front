"use client"

import Link from "next/link";
import styles from "./HomePage.module.css";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const { isAuth } = useAuth();
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Ressources Relationnelles</h1>

        <p className={styles.subtitle}>
          Partagez, découvrez et échangez autour de ressources utiles à la
          compréhension des relations humaines.
        </p>

        <div className={styles.actions}>
          <Link href="/resources" className={styles.primaryButton}>
            Explorer les ressources
          </Link>
          {!isAuth && (
            <Link href="/login" className={styles.secondaryButton}>
              Se connecter
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
