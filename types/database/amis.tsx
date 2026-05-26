import { User } from "./users";

export type Ami = {
  id: number;
  statut: string;
  dateAction: string;
  demandeur: User;
  ami: User;
};