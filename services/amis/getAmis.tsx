import { Ami } from "@/types/database/amis";

type Collection<T> = {
  member?: T[];
  "hydra:member"?: T[];
};

export default async function getAmis(): Promise<Ami[]> {
 const res = await fetch("/api/amis/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  const data: Collection<Ami> = await res.json();

  const items = data.member ?? data["hydra:member"] ?? [];

  return items;
}