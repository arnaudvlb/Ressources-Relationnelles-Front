import { User } from "./users";


export type Message = {
id: number;
  contenu: string;
  pieceJointe?: string | null;
  dateEnvoi: string;
  expediteur: User;
  destinataire: User;
}
