"use client";

import Link from "next/link";
import AuthForm from "@/components/AuthForm/AuthForm";

export default function LoginPage() {
  return (
    <AuthForm
      titreForm="Connexion"
      champs={["Email", "Mot de passe"]}
      buttonText="Se connecter"
      placeholders={["exemple@email.com", "••••••••"]}
      footerContent={<>
        <span>Pas encore de compte ? </span>
        <Link href="/register" className="link">
          Créer un compte
        </Link>
      </>}
    />
  );
}
