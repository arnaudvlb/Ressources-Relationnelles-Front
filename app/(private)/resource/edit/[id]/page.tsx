"use client";

import Form from "@/components/ui/Form/Form";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { usePutRessource } from "@/hooks/ressources/usePutRessource";
import { useRessource } from "@/hooks/ressources/useRessource";
import { useParams, useRouter } from "next/navigation";

export default function editResourcePage() {
  const params = useParams();
  const id = params.id as string;
  const { putRessource, loading, error } = usePutRessource(id);
  const { resource } = useRessource(id);
  const router = useRouter();

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await putRessource({
      titre: formData.titre,
      contenu: formData.Contenu,
      estVisible: true,
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
          defaultValues={{
            titre: resource?.titre ?? "",
            Contenu: resource?.contenu ?? "",
          }}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
