import styles from "@/components/Resource/Content/Content.module.css";
import { ContentProps } from "@/types/components/resource/ContentProps";

export default function Content({ contenu, medias }: ContentProps) {
  return (
    <div className={styles.resourceContentCol}>
      {medias?.map((media, key) => {
        return (
          <img key={key} className={styles.resourceImage} src={media} alt="" />
        );
      })}

      <div className={styles.resourceContentCard}>{contenu}</div>
    </div>
  );
}
