"use client";

import { AuthFormProps } from "@/types/components/AuthFormProps";
import styles from "@/components/AuthForm/AuthForm.module.css";
import Button from "@/components/ui/Button/Button";

export default function AuthForm({
  titreForm,
  champs,
  buttonText,
  placeholders,
  onSubmit,
  footerContent,
}: AuthFormProps) {
  return (
    <div className="pageCenter">
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>{titreForm}</h1>

        <form className={styles.authForm}>
          {champs.map((champ, index) => (
            <div key={index} className={styles.formGroup}>
              <label htmlFor={champ.toLowerCase()}>{champ}</label>
              <input
                type="text"
                id={champ.toLowerCase()}
                placeholder={placeholders?.[index] || ""}
              />
            </div>
          ))}
          <Button text={buttonText} />
          {footerContent && (
            <div className={styles.authFooter}>{footerContent}</div>
          )}
        </form>
      </div>
    </div>
  );
}
