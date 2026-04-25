"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm/AuthForm";
import { useRegister } from "@/hooks/useRegister";

export default function RegisterPage() {
  const { registerUser, loading, error } = useRegister();
  const router = useRouter();

  const handleSubmit = async (formData: Record<string, string>) => {
  const res = await registerUser({
    email: formData.email,
    password: formData.password,
    nom: formData.nom,
    prenom: formData.prenom,
    telephone: formData.telephone,
    pseudo: formData.pseudo,
  });

  if (res) {
    router.push("/login");
  }

  if (error) return <p>Erreur : {error}</p>;
};

  return (
    <AuthForm
      titreForm="Créer un compte"
      champs={["Prénom", "Nom", "Pseudo", "Email", "Téléphone", "Mot de passe"]}
      names={["prenom", "nom", "pseudo", "email", "telephone", "password"]}
      buttonText={loading ? "Inscription..." : "S'inscrire"}
      placeholders={[
        "Prénom",
        "Nom",
        "Pseudo",
        "exemple@email.com",
        "0612345678",
        "••••••••"
      ]}
      onSubmit={handleSubmit}
    />
  );
}
