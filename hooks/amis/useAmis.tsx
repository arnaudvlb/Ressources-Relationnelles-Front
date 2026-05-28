import { useEffect, useState } from "react";
import getAmis from "@/services/amis/getAmis";
import { Ami } from "@/types/database/amis";
import { errorMonitor } from "node:events";

export function useAmis() {

  const [amis, setAmis] = useState<Ami[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshAmis = async () => {
 
    setLoading(true);
    setError(null);

    try {
      const data = await getAmis();
      setAmis(data);
      return data;
    } catch (err: any) {
      setError(err?.message ?? "Erreur inconnue");
      return [];
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    refreshAmis();
  }, []);


  return {
    amis,
    setAmis,
    loading,
    error,
    refreshAmis,
  };
}