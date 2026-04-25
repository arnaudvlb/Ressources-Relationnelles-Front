"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm/AuthForm";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const { loginUser, loading, error } = useLogin();
  const router = useRouter();

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await loginUser({
      email: formData.email,
      password: formData.password,
    });

    if (res) {
      router.push("/resources");
    }

    if (error) return <p>Erreur : {error}</p>;
  };

  return (
    <AuthForm
      titreForm="Connexion"
      champs={["Email", "Mot de passe"]}
      names={["email", "password"]}
      buttonText={loading ? "Connexion..." : "Se connecter"}
      placeholders={["exemple@email.com", "••••••••"]}
      onSubmit={handleSubmit}
      footerContent={
        <>
          <span>Pas encore de compte ? </span>
          <Link href="/register" className="link">
            Créer un compte
          </Link>
        </>
      }
    />
  );
}
