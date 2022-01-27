import { useRouter } from "next/router";

export default function Etudeid() {
  const router = useRouter();
  const { eid } = router.query;
  return <p>Etude: {eid}</p>;
}