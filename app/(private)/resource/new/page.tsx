"use client"

import Form from "@/components/ui/Form/Form";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { useCreateRessource } from "@/hooks/ressources/useCreateRessource";
import { useParams, useRouter } from "next/navigation";

export default function newResourcePage() {
  const { createRessource, loading, error } = useCreateRessource();
  const router = useRouter();

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await createRessource({
      titre: formData.titre,
      contenu: formData.Contenu,
      estVisible : true,
      visibilite: "public",
    });

    if (res) {
      setTimeout(() => {
        router.push(`/resources`);
      });
    }
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      {error && <FormMessage message={error} />}
      <div className="page">
        <Form
          titreForm="Créer une ressource"
          champs={["Titre"]}
          names={["titre"]}
          buttonText={loading ? "Création..." : "Création de la ressource"}
          placeHolders={["Titre"]}
          textAreas={["Contenu"]}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
