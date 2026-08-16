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
  categorie,
}: Readonly<AsideProps>) {
  const { createAdorer } = useCreateAdorer();
  const { deleteAdorer } = useDeleteAdorer();

  const { createFavori } = useCreateFavori();
  const { deleteFavori } = useDeleteFavori();

  async function handleToggleLike() {
 

    const storedUserId = localStorage.getItem("userId");
    const currentUserId = storedUserId ? Number(storedUserId) : null;

   

    if (!currentUserId) {
     
      return;
    }

    if (isLiked && adorerId) {
      

      try {
        const deleted = await deleteAdorer(adorerId);

       

        if (deleted) {
          setIsLiked(false);
          setAdorerId(null);
          setAdorersCount((prev) => Math.max(prev - 1, 0));

        }
      } catch (error) {
        console.log(" Erreur pendant deleteAdorer :", error);
      }

      return;
    }

    const payload = {
      dateAdorer: new Date().toISOString(),
      utilisateur: `/api/utilisateurs/${currentUserId}`,
      resource: `/api/ressources/${resourceId}`,
    };


    try {
      const created = await createAdorer(payload);

     

      if (created) {
        setIsLiked(true);
        setAdorerId(created.id);
        setAdorersCount((prev) => prev + 1);

      } else {
        console.log(" createAdorer a retourné null ou undefined");
      }
    } catch (error) {
      console.log(" Erreur pendant createAdorer :", error);
    }

    console.log("Fin handleToggleLike ajout");
  }

  async function handleToggleFavori() {
    

    const storedUserId = localStorage.getItem("userId");
    const currentUserId = storedUserId ? Number(storedUserId) : null;

  

    if (!currentUserId) {
      console.log("Aucun utilisateur connecté, arrêt du favori.");
      return;
    }

    if (isFavoris && favoriId) {
     

      try {
        const deleted = await deleteFavori(favoriId);

      

        if (deleted) {
          setIsFavoris(false);
          setFavoriId(null);
          setFavorisCount((prev) => Math.max(prev - 1, 0));

         
        }
      } catch (error) {
        console.log("Erreur pendant deleteFavori :", error);
      }

   
      return;
    }

    const payload = {
      utilisateur: `/api/utilisateurs/${currentUserId}`,
      resource: `/api/ressources/${resourceId}`,
    };



    try {
      const created = await createFavori(payload);

     
      if (created) {
        setIsFavoris(true);
        setFavoriId(created.id);
        setFavorisCount((prev) => prev + 1);

      
      } else {
        console.log(" createFavori a retourné null ou undefined");
      }
    } catch (error) {
      console.log(" Erreur pendant createFavori :", error);
    }

    console.log(" Fin handleToggleFavori ajout");
  }

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
          <p style={{ color: categorie.couleur }}>
            {categorie.libelle}
          </p>
      </div>
    </aside>
  );
}