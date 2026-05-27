import { User } from "@/types/database/users";

export type UtilisateurViewProps = {
  utilisateur: User | null;
  id: string | null
};