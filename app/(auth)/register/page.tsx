"use client";

import "../../global.css";
import AuthForm from "@/components/AuthForm/AuthForm";

export default function RegisterPage() {
  return (
    <AuthForm
      titreForm="Créer un compte"
      champs={["Prénom", "Nom", "Pseudo", "Email", "Téléphone", "Mot de passe"]}
      buttonText="S'inscrire"
      placeholders={[
        "Prénom",
        "Nom",
        "Pseudo",
        "exemple@email.com",
        "06 12 34 56 78",
        "••••••••"
      ]}
    />
  );
}
