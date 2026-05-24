"use client";

import ResourcesCard from "@/components/ResourcesCard/ResourcesCard";
import CreateButton from "@/components/ui/CreateButton/CreateButton";
import Filter from "@/components/ui/Filter/Filter";
import { useRessources } from "@/hooks/ressources/useRessources";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function ResourcesPage() {
  const { resources, loading, error } = useRessources();
  const { isAuth } = useAuth();
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const searchLower = search.toLowerCase();

    const matchTitre = resource.titre.toLowerCase().includes(searchLower);

    const matchCategorie = resource.categories[0].libelle.toLowerCase().includes(searchLower);

    if (filterBy === "titre") return matchTitre;
    if (filterBy === "categorie") return matchCategorie;

    return matchTitre || matchCategorie;
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  return (
    <main className="resources-page">
      <h1 className="resources-title">Ressources</h1>
      <Filter
        value={search}
        onChange={setSearch}
        filterBy={filterBy}
        onFilterByChange={setFilterBy}
        options={[
          { label: "Tout", value: "all" },
          { label: "Titre", value: "titre" },
          { label: "Catégorie", value: "categorie" },
        ]}
      />
      <ResourcesCard resources={filteredResources} />
      {isAuth && (
        <CreateButton url="/resources/new"/>
      )}
    </main>
  );
}
