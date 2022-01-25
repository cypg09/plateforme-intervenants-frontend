import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Postulants() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  })
  return(
    <p>Redirecting...</p>
  )
}