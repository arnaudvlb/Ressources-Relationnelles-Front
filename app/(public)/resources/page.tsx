"use client";

import Card from "@/components/ui/Card/Card";

// TODO: remplacer les données statiques par des données dynamiques provenant de l'API

type Resource = {
  id: number;
  titre: string;
  contenu: string;
  libelleCategorie: string;
};

const resourceData: Resource[] = [
  {
    id: 1,
    titre: "Tri des déchets",
    contenu: "Apprenez comment trier vos déchets efficacement et réduire votre impact environnemental.",
    libelleCategorie: "Environnement"
  },
  {
    id: 2,
    titre: "Participation citoyenne",
    contenu: "Découvrez les moyens de participer activement à la vie de votre commune et vos quartiers.",
    libelleCategorie: "Civisme"
  },
  {
    id: 3,
    titre: "Énergie renouvelable",
    contenu: "Comprenez les avantages des énergies renouvelables et comment les intégrer chez vous.",
    libelleCategorie: "Écologie"
  },
  {
    id: 4,
    titre: "Sécurité routière",
    contenu: "Informez-vous sur les bonnes pratiques pour améliorer la sécurité sur les routes.",
    libelleCategorie: "Sécurité"
  },
  {
    id: 5,
    titre: "Élections locales",
    contenu: "Tout ce que vous devez savoir pour voter et participer aux élections locales.",
    libelleCategorie: "Civisme"
  },
  {
    id: 6,
    titre: "Mobilité douce",
    contenu: "Encourager les déplacements à pied, à vélo et en transport en commun pour réduire la pollution.",
    libelleCategorie: "Environnement"
  },
];

export default function ResourcesPage() {
    return (
  <main className="resources-page">
    <h1 className="resources-title">Ressources</h1>

    <Card resources={resourceData} />
  </main>
)};