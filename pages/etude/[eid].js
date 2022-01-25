import { useRouter } from "next/router";

export default function EtudeById() {
  const router = useRouter();
  const { eid } = router.query;
  return <p>Etude: {eid}</p>;
}