import { useRouter } from 'next/router';

export default function PostulantsbyId() {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Postulants: {pid}</p>
}
