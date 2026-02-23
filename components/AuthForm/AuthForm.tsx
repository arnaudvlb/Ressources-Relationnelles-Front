"use client";

import styles from "@/components/AuthForm/AuthForm.module.css";

export default function AuthForm(
  titreForm: string,
  champs: string[],
  buttonText: string,
  placeholders?: string[],
  onSubmit?: (data: Record<string, string>) => void,
) {
  <div className={styles.pageCenter}>
    <div className={styles.authCard}>
      <h1 className={styles.authTitle}>{titreForm}</h1>
    </div>

    <form className={styles.authForm}>
      {champs.map((champ, index) => (
        <div className={styles.formGroup}>
          <label htmlFor={champ.toLowerCase()}>{champ}</label>
          <input
            type="text"
            id={champ.toLowerCase()}
            placeholder={placeholders?.[index] || ""}
          />
        </div>
      ))}
      <button type="submit" className={styles.btnPrimary}>
        {buttonText}
      </button>
    </form>
  </div>;
}
