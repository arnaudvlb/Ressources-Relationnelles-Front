"use client";

import BackButton from "@/components/ui/BackButton/BackButton";
import Header from "@/components/Resource/Header/Header";
import Aside from "@/components/Resource/Aside/Aside";
import Content from "@/components/Resource/Content/Content";
import { PageProps } from "@/types/components/resource/PageProps";
import styles from "@/components/Resource/Page/Page.module.css"


export default function Page({ resource }: PageProps) {

  return (
    <div className={styles.resourcePage}>
      <BackButton href="/resources" />

      <Header
        titre={resource.titre}
        utilisateur={`${resource.utilisateur.prenom} ${resource.utilisateur.nom}`}
        dateCreation={resource.dateCreation}
        vues={0}
      />

      <div className={styles.resourceLayout}>
        <Content contenu={resource.contenu} medias={resource.medias} />

        <Aside
          tagsRessources={resource.tagsRessources}
          categories={resource.categories}
        />
      </div>
    </div>
  );
}
