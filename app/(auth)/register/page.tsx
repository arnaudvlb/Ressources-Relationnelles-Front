"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm/AuthForm";
import { useRegister } from "@/hooks/useRegister";
import FormMessage from "@/components/ui/FormMessage/FormMessage";

export default function RegisterPage() {
  const { registerUser, loading, error, data } = useRegister();
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
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  };

  return (
    <>
      {(data?.message || error) && (
        <FormMessage message={data?.message || error || ""} error={!!error} />
      )}
      <AuthForm
        titreForm="Créer un compte"
        champs={[
          "Prénom",
          "Nom",
          "Pseudo",
          "Email",
          "Téléphone",
          "Mot de passe",
        ]}
        names={["prenom", "nom", "pseudo", "email", "telephone", "password"]}
        buttonText={loading ? "Inscription..." : "S'inscrire"}
        placeholders={[
          "Prénom",
          "Nom",
          "Pseudo",
          "exemple@email.com",
          "0612345678",
          "••••••••",
        ]}
        onSubmit={handleSubmit}
      />
    </>
  );
}
