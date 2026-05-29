"use client"

import Page from "@/components/Messagerie/Page";
import AccessDenied from "@/components/ui/AccessDenied/AccessDenied";
import { useAuth } from "@/hooks/useAuth";



export default function MessageriePage(){
  const { isAuth } = useAuth();

  if(!isAuth) return <AccessDenied/>

return(
    <Page/>
)
    
}