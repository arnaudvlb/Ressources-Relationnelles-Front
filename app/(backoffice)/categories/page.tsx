"use client";

import CategoriesCard from "@/components/CategoriesCard/CategoriesCard";
import AccessDenied from "@/components/ui/AccessDenied/AccessDenied";
import CreateButton from "@/components/ui/CreateButton/CreateButton";
import Filter from "@/components/ui/Filter/Filter";
import { useCategories } from "@/hooks/categories/useCategories";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function CategoriesPage() {
  const { categories, loading, error } = useCategories();
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const { isAdmin } = useAuth();

  const filteredCategories = categories.filter((categorie) => {
    const searchLower = search.toLowerCase();

    const matchLibelle = categorie.libelle.toLowerCase().includes(searchLower);

    if (filterBy === "libelle") return matchLibelle;

    return matchLibelle;
  });

  if (!isAdmin) return <AccessDenied/>;

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <main className="page">
      <h1 className="pageTitle">Gestion des utilisateurs</h1>
      <Filter
        value={search}
        onChange={setSearch}
        filterBy={filterBy}
        onFilterByChange={setFilterBy}
        options={[
          { label: "Tout", value: "all" },
          { label: "Libellé", value: "libelle" },
        ]}
      />
      <CategoriesCard categories={filteredCategories}/>
      <CreateButton url="/categorie/new"/>
    </main>
  );
}
