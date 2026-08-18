
"use client";
import FormMessage from "@/components/ui/FormMessage/FormMessage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogOutPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      window.dispatchEvent(new Event("auth-change"));

      router.push("/login");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <FormMessage message={"Vous allez être déconnecté."} />
  );
}