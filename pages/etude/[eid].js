import { useRouter } from "next/router";
import Etude from "../../components/rh/etude/Etude";

export default function Etudeid() {
  const router = useRouter();
  const { eid } = router.query;
  return(
    <>
      <Etude
        eid={eid}
      />
    </>
  );
}