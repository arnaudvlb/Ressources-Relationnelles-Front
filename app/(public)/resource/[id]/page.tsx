"use client";

import { useParams } from "next/navigation";
import Page from "@/components/Resource/Page/Page";
import { useRessource } from "@/hooks/resources/useRessource";

export default function ResourcePage() {
  const params = useParams();
  const id = params.id as string;

  const { resource, loading, error } = useRessource(id);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error || !resource) {
    return <p>Erreur lors du chargement.</p>;
  }

  return (
    <Page resource={resource} />
  );
}
