"use client";

import AccessDenied from "@/components/ui/AccessDenied/AccessDenied";
import BackButton from "@/components/ui/BackButton/BackButton";
import Form from "@/components/ui/Form/Form";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { useRoles } from "@/hooks/roles/useRoles";
import { useAuth } from "@/hooks/useAuth";
import { usePutUtilisateur } from "@/hooks/utilisateurs/usePutUtilisateur";
import { useUtilisateur } from "@/hooks/utilisateurs/useUtilisateur";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function alterUtilisateur() {
  const [message, setMessage] = useState("");
  const params = useParams();
  const id = params.id as string;
  const { utilisateur } = useUtilisateur(id);
  const { putUtilisateur, loading, error } = usePutUtilisateur(id);
  const { roles } = useRoles();
  const router = useRouter();
  const { isAdmin } = useAuth();

  if (id !== localStorage.getItem("userId") && !isAdmin) return <AccessDenied/>; 

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await putUtilisateur({
      nom: formData.nom,
      prenom: formData.prenom,
      telephone: formData.telephone,
      email: formData.email,
      pseudo: formData.pseudo,
      photoProfil: utilisateur?.photo_profil ?? "",
      statusCompte: Boolean(formData.statusCompte) ?? utilisateur?.statusCompte,
      dateCreation: utilisateur?.dateCreation ?? new Date().toISOString(),
      role: formData.role != null ? `/api/roles_utilisateurs/${formData.role}` : `/api/roles_utilisateurs/${utilisateur?.role.id}`,
      plainPassword: formData.password,
    });

    if (res) {
      setTimeout(() => {
        setMessage("Modification réussie !");
        router.push(`/utilisateur/${id}`);
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
        <BackButton href={`/utilisateur/${id}`}/>
        <Form
          titreForm="Données utilisateur"
          champs={[
            "Nom",
            "Prénom",
            "Numéro de téléphone",
            "Adresse Email",
            "Pseudo",
            "Nouveau mot de passe",
          ]}
          names={[
            "nom",
            "prenom",
            "telephone",
            "email",
            "pseudo",
            "password",
          ]}
          buttonText={loading ? "Mise à jour..." : "Mettre à jour les données"}
          placeHolders={[
            "Nom",
            "Prénom",
            "0612345678",
            "nom.prenom@xyz.com",
            "Pseudo",
            "••••••••",
          ]}
          onSubmit={handleSubmit}
          defaultValues={{
            nom: utilisateur?.nom ?? "",
            prenom: utilisateur?.prenom ?? "",
            telephone: utilisateur?.telephone ?? "",
            email: utilisateur?.email ?? "",
            pseudo: utilisateur?.pseudo ?? "",
            password: "",
          }}
          selects={
            isAdmin
              ? [
                  {
                    label: "Statut du compte",
                    name: "statusCompte",
                    values: ["1", "0"],
                    texts: ["Actif", "Désactivé"],
                    selectDefaultValue: utilisateur?.statusCompte == true ? "1" : "0",
                  },

                  {
                    label: "Rôle",
                    name: "role",
                    values: roles.map((role) => String(role.id)),
                    texts: roles.map((role) => role.libelle),
                    selectDefaultValue: String(utilisateur?.role?.id ?? ""),
                  },
                ]
              : undefined
          }
        />
      </div>
    </>
  );
}
