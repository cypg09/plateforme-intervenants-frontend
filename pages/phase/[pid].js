import { useRouter } from 'next/router';
import Phase from "../../components/rh/phase/Phase";

export default function Phaseid() {
  const router = useRouter();
  const { pid } = router.query;
  return(
    <>
      <Phase 
        pid={pid}
      />
    </>
  );
}
