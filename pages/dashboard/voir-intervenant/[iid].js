import { useRouter } from "next/router";

export default function IntervenantById() {
  const router = useRouter();
  const { iid } = router.query;
  return <p>Intervenant: {iid}</p>;
}