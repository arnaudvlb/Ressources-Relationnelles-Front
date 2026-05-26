"use client";

import Form from "@/components/ui/Form/Form";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { useRoles } from "@/hooks/roles/useRoles";
import { useAuth } from "@/hooks/useAuth";
import { usePutUtilisateur } from "@/hooks/utilisateurs/usePutUtilisateur";
import { useUtilisateur } from "@/hooks/utilisateurs/useUtilisateur";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function alterUtilisateur() {
  const [message, setMessage] = useState("");
  const params = useParams();
  const id = params.id as string;
  const { utilisateur } = useUtilisateur(id);
  const { putUtilisateur, loading, error } = usePutUtilisateur(id);
  const { roles } = useRoles();
  const [selectedRole, setSelectedRole] = useState(Number);
  const router = useRouter();
  const { isAdmin } = useAuth();

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await putUtilisateur({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      pseudo: formData,
      photoProfil: "",
      statusCompte: true,
      dateCreation: "",
      role: "",
      plainPassword: "",
    });

    if (res) {
      setTimeout(() => {
        setMessage("Modification réussie !");
        router.push("/");
      }, 1500);
    }
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      {(message || error) && (
        <FormMessage message={message || error || ""} error={!!error} />
      )}
      <div className="page">
        <Form
          titreForm="Données utilisateur"
          champs={["Nom", "Prénom", "Numéro de téléphone", "Adresse Email", "Pseudo", "Nouveau mot de passe"]}
          names={["nom", "prenom", "telephone", "email", "pseudo", "plainPassword"]}
          buttonText={loading ? "Mise à jour..." : "Mettre à jour les données"}
          placeHolders={["Nom", "Prénom", "0612345678","nom.prenom@xyz.com", "Pseudo", "••••••••"]}
          onSubmit={handleSubmit}
          defaultValues={{
            nom: utilisateur?.nom ?? "",
            prenom: utilisateur?.prenom ?? "",
            telephone: utilisateur?.telephone ?? "",
            email: utilisateur?.email ?? "",
            plainPassword: "",
          }}
        />
      </div>
    </>
  );
}
