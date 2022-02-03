import { useRouter } from "next/router";
import Intervenant from "../../components/rh/intervenant/Intervenant";

export default function IntervenantById() {
  const router = useRouter();
  const { iid } = router.query;
  return(
    <>
      <Intervenant/>
    </>
  );
}