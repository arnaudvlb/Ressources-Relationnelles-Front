

import { User } from "@/types/database/users";

export type AmisCardProps = {
  userId: number;
  typedUser: User;
  getAvatarLetter: (user: User) => string;
  adding: boolean;
  handleAddFriend: (user: User) => void | Promise<void>;
};