"use client";

import styles from "./page.module.css";
import { useState } from "react";
import BackButton from "@/components/ui/BackButton/BackButton";
import Header from "@/components/Resource/Header/Header";
import Aside from "@/components/Resource/Aside/Aside";
import Content from "@/components/Resource/Content/Content";

export default function ResourcePage() {
  const [replyToId, setReplyToId] = useState<number | null>(null);

  const resource = {
    titre: "Ma première ressource",
    contenu: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    utilisateur: "John Doe",
    dateCreation: "2026-04-20",
    tagsRessources: ["React", "Next.js", "Frontend"],
    categories: ["Frontend", "JavaScript"],
    medias: ["https://placehold.co/800x400"],
    vues: 0,
  };

  return (
    <div className={styles.resourcePage}>
      <BackButton href="/resources" />
      <Header
        titre={resource.titre}
        utilisateur={resource.utilisateur}
        dateCreation={resource.dateCreation}
        vues={resource.vues}
      />

      <div className={styles.resourceLayout}>
        <Content contenu={resource.contenu} medias={resource.medias} />

        <Aside
          utilisateur={resource.utilisateur}
          tagsRessources={resource.tagsRessources}
          categories={resource.categories}
        />
      </div>
    </div>
  );
}
