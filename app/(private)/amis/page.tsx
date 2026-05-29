"use client";

import Page from "@/components/Amis/Page";
import AccessDenied from "@/components/ui/AccessDenied/AccessDenied";
import { useAuth } from "@/hooks/useAuth";

export default function AmisPage() {
  const { isAuth } = useAuth();

  if(!isAuth) return <AccessDenied/>

  return <Page />;
}
