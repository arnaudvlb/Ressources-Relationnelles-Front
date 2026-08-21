"use client";

import AccessDenied from "@/components/ui/AccessDenied/AccessDenied";
import BackButton from "@/components/ui/BackButton/BackButton";
import UtilisateurView from "@/components/UtilisateurView/UtilisateurView";
import { useAuth } from "@/hooks/useAuth";
import { useUtilisateur } from "@/hooks/utilisateurs/useUtilisateur";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function viewUtilisateur() {
  const params = useParams();
  const id = params.id as string;

  const { utilisateur, loading, error } = useUtilisateur(id);
  const { isAdmin } = useAuth();

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  if (id !== userId && !isAdmin) return <AccessDenied />;

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <main className="page">
      {isAdmin && <BackButton href="/utilisateurs" />}
      <UtilisateurView utilisateur={utilisateur} id={id} />
    </main>
  );
}