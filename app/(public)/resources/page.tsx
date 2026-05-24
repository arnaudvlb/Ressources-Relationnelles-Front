"use client";

import Card from "@/components/ui/Card/Card";
import { useRessources } from "@/hooks/resources/useRessources";

export default function ResourcesPage() {
  const { resources, loading, error } = useRessources();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  return (
    <main className="resources-page">
      <h1 className="resources-title">Ressources</h1>
      <Card resources={resources} />
    </main>
  );
}
