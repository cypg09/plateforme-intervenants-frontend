import { useRouter } from "next/router"
import { useEffect } from "react";

export default function VoirIntervenant() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  })
  return(
    <p>Redirecting...</p>
  )
}