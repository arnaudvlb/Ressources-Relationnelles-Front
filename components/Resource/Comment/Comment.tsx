import { useState } from "react";
import styles from "@/components/Resource/Comment/Comment.module.css";
import { CommentProps } from "@/types/components/resource/CommentProps";

export default function Comment({ commentaires }: CommentProps) {
  const [replyToId, setReplyToId] = useState<number | null>(null);

  const parents = commentaires.filter(
    (commentaire) => commentaire.commentaireParentId == null
  );

  const enfants = commentaires.filter(
    (commentaire) => commentaire.commentaireParentId != null
  );

  const getEnfants = (id: number) =>
    enfants.filter((commentaire) => commentaire.commentaireParentId === id);

  return (
    <div>
      <div className={styles.resourceComments}>
        <h3>Commentaires</h3>

        <div className={styles.commentForm}>
          <input
            className={styles.commentInput}
            placeholder="Écrire un commentaire..."
          />

          <button className={styles.commentBtn}>Envoyer</button>
        </div>
      </div>

      {parents.map((parent) => (
        <div key={parent.id} className={styles.commentCard}>
          <div className={styles.commentRow}>
            <div>{parent.contenu}</div>

            <button
              className={styles.replyBtn}
              onClick={() =>
                setReplyToId(replyToId === parent.id ? null : parent.id)
              }
            >
              Répondre
            </button>
          </div>

          {replyToId === parent.id && (
            <div className={styles.replyForm}>
              <input
                className={styles.commentInput}
                placeholder="Écrire une réponse..."
              />
              <button className={styles.commentBtn}>Répondre</button>
            </div>
          )}

          <div className={styles.replies}>
            {getEnfants(parent.id).map((enfant) => (
              <div key={enfant.id} className={styles.replyItem}>
                ↳ {enfant.contenu}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}