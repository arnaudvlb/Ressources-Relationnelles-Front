"use client";

import Form from "@/components/ui/Form/Form";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { useCategories } from "@/hooks/categories/useCategories";
import { useCreateRessource } from "@/hooks/ressources/useCreateRessource";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function newResourcePage() {
  const { createRessource, loading, error } = useCreateRessource();
  const { categories } = useCategories();
  const { isAuth } = useAuth();
  const router = useRouter();

  if (!isAuth) return;

  const handleSubmit = async (formData: Record<string, string>) => {
    const res = await createRessource({
      titre: formData.titre,
      contenu: formData.Contenu,
      valide: false,
      date_creation: new Date().toISOString(),
      visibilite: formData.visibilite,
      utilisateur: Number(localStorage.getItem("userId")),
      categorie: formData.categorie,
      tags: [""],
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
          selects={[
            {
              label: "Visibilité",
              name: "visibilite",
              values: ["public", "friend", "private"],
              texts: ["Public", "Amis", "Privé"],
              selectDefaultValue: "public",
            },
            {
              label: "Catégorie",
              name: "categorie",
              values: categories.map((categorie) => String(categorie.id)),
              texts: categories.map((categorie) => categorie.libelle),
              selectDefaultValue: String(categories[0]?.id),
            },
          ]}
        />
      </div>
    </>
  );
}
