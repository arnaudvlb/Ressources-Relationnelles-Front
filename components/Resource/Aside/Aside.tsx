"use client";

import styles from "@/components/Resource/Aside/Aside.module.css";
import { AsideProps } from "@/types/components/resource/AsideProps";

import { useCreateFavori } from "@/hooks/favoris/useCreateFavori";
import { useDeleteFavori } from "@/hooks/favoris/useDeleteFavori";
import { useCreateAdorer } from "@/hooks/adorers/useCreateAdorers";
import { useDeleteAdorer } from "@/hooks/adorers/useDeleteAdorers";

export default function Aside({
  resourceId,
  adorers,
  favoris,
  partages,
  consultations,
  isLiked,
  isFavoris,
  setIsLiked,
  setIsFavoris,
  adorerId,
  favoriId,
  setAdorerId,
  setFavoriId,
  setAdorersCount,
  setFavorisCount,
  tags,
  categories,
}: Readonly<AsideProps>) {
  const { createAdorer } = useCreateAdorer();
  const { deleteAdorer } = useDeleteAdorer();

  const { createFavori } = useCreateFavori();
  const { deleteFavori } = useDeleteFavori();

  async function handleToggleLike() {
    console.log(" Début handleToggleLike");
    console.log("resourceId :", resourceId);
    console.log("isLiked actuel :", isLiked);
    console.log("adorerId actuel :", adorerId);
    console.log("compteur adorers actuel :", adorers);

    const storedUserId = localStorage.getItem("userId");
    const currentUserId = storedUserId ? Number(storedUserId) : null;

    console.log("storedUserId :", storedUserId);
    console.log("currentUserId :", currentUserId);

    if (!currentUserId) {
      console.log(" Aucun utilisateur connecté, arrêt du like.");
      return;
    }

    if (isLiked && adorerId) {
      console.log(" Suppression du like id :", adorerId);

      try {
        const deleted = await deleteAdorer(adorerId);

        console.log("Réponse deleteAdorer :", deleted);

        if (deleted) {
          setIsLiked(false);
          setAdorerId(null);
          setAdorersCount((prev) => Math.max(prev - 1, 0));

          console.log(" Like supprimé localement");
        }
      } catch (error) {
        console.log(" Erreur pendant deleteAdorer :", error);
      }

      console.log("Fin handleToggleLike suppression");
      return;
    }

    const payload = {
      dateAdorer: new Date().toISOString(),
      utilisateur: `/api/utilisateurs/${currentUserId}`,
      resource: `/api/ressources/${resourceId}`,
    };

    console.log("📤 Payload createAdorer :", payload);

    try {
      const created = await createAdorer(payload);

      console.log(" Réponse createAdorer :", created);

      if (created) {
        setIsLiked(true);
        setAdorerId(created.id);
        setAdorersCount((prev) => prev + 1);

        console.log(" Like ajouté localement avec id :", created.id);
      } else {
        console.log(" createAdorer a retourné null ou undefined");
      }
    } catch (error) {
      console.log(" Erreur pendant createAdorer :", error);
    }

    console.log("Fin handleToggleLike ajout");
  }

  async function handleToggleFavori() {
    console.log(" Début handleToggleFavori");
    console.log("resourceId :", resourceId);
    console.log("isFavoris actuel :", isFavoris);
    console.log("favoriId actuel :", favoriId);
    console.log("compteur favoris actuel :", favoris);

    const storedUserId = localStorage.getItem("userId");
    const currentUserId = storedUserId ? Number(storedUserId) : null;

    console.log("storedUserId :", storedUserId);
    console.log("currentUserId :", currentUserId);

    if (!currentUserId) {
      console.log("❌ Aucun utilisateur connecté, arrêt du favori.");
      return;
    }

    if (isFavoris && favoriId) {
      console.log("🗑️ Suppression du favori id :", favoriId);

      try {
        const deleted = await deleteFavori(favoriId);

        console.log("Réponse deleteFavori :", deleted);

        if (deleted) {
          setIsFavoris(false);
          setFavoriId(null);
          setFavorisCount((prev) => Math.max(prev - 1, 0));

          console.log(" Favori supprimé localement");
        }
      } catch (error) {
        console.log("Erreur pendant deleteFavori :", error);
      }

      console.log(" Fin handleToggleFavori suppression");
      return;
    }

    const payload = {
      utilisateur: `/api/utilisateurs/${currentUserId}`,
      resource: `/api/ressources/${resourceId}`,
    };

    console.log(" Payload createFavori :", payload);

    try {
      const created = await createFavori(payload);

      console.log(" Réponse createFavori :", created);

      if (created) {
        setIsFavoris(true);
        setFavoriId(created.id);
        setFavorisCount((prev) => prev + 1);

        console.log(" Favori ajouté localement avec id :", created.id);
      } else {
        console.log(" createFavori a retourné null ou undefined");
      }
    } catch (error) {
      console.log(" Erreur pendant createFavori :", error);
    }

    console.log(" Fin handleToggleFavori ajout");
  }

  console.log(" Aside rendu", {
    resourceId,
    adorers,
    favoris,
    partages,
    consultations,
    isLiked,
    isFavoris,
    adorerId,
    favoriId,
    tags,
    categories,
  });

  return (
    <aside className={styles.resourceAside}>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.actionBtn} ${
            isLiked ? styles.actionBtnActive : ""
          }`}
          onClick={handleToggleLike}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{adorers}</span>
        </button>


        <button type="button" className={styles.actionBtn}>
          <span>👁️</span>
          <span>{consultations}</span>
        </button>

        <button
          type="button"
          className={`${styles.actionBtn} ${
            isFavoris ? styles.actionBtnActive : ""
          }`}
          onClick={handleToggleFavori}
        >
          <span>{isFavoris ? "⭐" : "☆"}</span>
          <span>{favoris}</span>
        </button>
      </div>

      <div className={styles.resourceCard}>
        <strong>Tags</strong>

        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag} style={{ color: tag.couleur }}>
              #{tag.libelle}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.resourceCard}>
        <strong>Catégories</strong>

        {(categories ?? []).map((categorie, i) => (
          <p key={i} style={{ color: categorie.couleur }}>
            {categorie.libelle}
          </p>
        ))}
      </div>
    </aside>
  );
}