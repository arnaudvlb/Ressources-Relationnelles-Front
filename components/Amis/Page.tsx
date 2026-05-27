"use client";

import { useEffect, useMemo, useState } from "react";

import { useAmis } from "@/hooks/amis/useAmis";

import { User } from "@/types/database/users";
import styles from "@/components/Amis/Page.module.css";
import { useUtilisateurs } from '../../hooks/utilisateurs/useUtilisateurs';
import { useCreateAmi } from "@/hooks/amis/useCreateAmi";
import AmisNoLogin from "./AmisNoLogin";
import AmisError from "./AmisError";
import AmisCard from "./AmisCard";



export default function Page() {
  const { utilisateurs : users, loading: loadingUsers, error: errorUsers } = useUtilisateurs();

  const {
    amis,
    loading: loadingAmis,
    error: errorAmis,
    refreshAmis,
  } = useAmis();

  const {
    createAmi,
    loading: adding,
    error: errorCreateAmi,
  } = useCreateAmi();


  
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

   useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    const userId = storedUserId ? Number(storedUserId) : null;

    setCurrentUserId(userId);
     }, []);
  
  function getAvatarLetter(user: User) {
    return user.pseudo?.charAt(0)?.toUpperCase() ?? "U";
  }

  const usersAlreadyFriendsIds = useMemo(() => {
    if (!currentUserId) return [];

    return amis
      .map((relation) => {
        const demandeurId = relation.demandeur.id;
        const amiId = relation.ami.id;

        if (demandeurId === currentUserId) return amiId;
        if (amiId === currentUserId) return demandeurId;

        return null;
      })
      .filter((id): id is number => id !== null);
  }, [amis, currentUserId]);

  const availableUsers = useMemo(() => {
    if (!currentUserId) return [];

    const searchLower = search.toLowerCase();

    return users.filter((user) => {
      const typedUser = user as User;
      const userId = typedUser.id;

      if (!userId) return false;

      const isCurrentUser = userId === currentUserId;
      const isAlreadyFriend = usersAlreadyFriendsIds.includes(userId);

      const pseudo = typedUser.pseudo?.toLowerCase() ?? "";
      

      const matchesSearch =pseudo.includes(searchLower)

      return !isCurrentUser && !isAlreadyFriend && matchesSearch;
    });
  }, [users, currentUserId, usersAlreadyFriendsIds, search]);

 async function handleAddFriend(typedUser: User) {
  if (!currentUserId) return;

  const userToAddId = typedUser.id;

  if (!userToAddId) return;

  const result = await createAmi({
    statut: "accepte",
    dateAction: new Date().toISOString(),
    demandeur: currentUserId,
    ami: userToAddId,
  });

  if (result) {
    await refreshAmis();
  }
}

  const loading = loadingUsers || loadingAmis;
  const error = errorUsers ?? errorAmis ?? errorCreateAmi;

  if (!currentUserId) {
    return (
      <AmisNoLogin/>
    );
  }

  if (loading) {
    return (
      <AmisNoLogin/>
    );
  }

  if (error) {
    return (
      <AmisError
      error={error}
      />
    );
  }

  return (
    <main className={styles.friendsPage}>
      <section className={styles.friendsHeader}>
        <h1>Ajouter des amis</h1>
        <p>Recherchez des utilisateurs et ajoutez-les à votre liste d’amis.</p>
      </section>

      <section className={styles.searchCard}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher par pseudo, nom ou email..."
          className={styles.searchInput}
        />
      </section>

      <section className={styles.usersList}>
        {availableUsers.length === 0 ? (
          <p className={styles.emptyText}>
            Aucun utilisateur disponible pour le moment.
          </p>
        ) : (
          availableUsers.map((user) => {
            const typedUser = user ;
            const userId = typedUser.id;

            if (!userId) return null;

            return (
             <AmisCard 
             key={userId}
             userId={userId}
             typedUser={typedUser}
             getAvatarLetter={getAvatarLetter}
             adding={adding}
             handleAddFriend={handleAddFriend
             }
             />
            );
          })
        )}
      </section>
    </main>
  );
}