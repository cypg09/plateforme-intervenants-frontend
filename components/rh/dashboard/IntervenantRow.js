import Link from "next/link";

export default function IntervenantRow({ nom, campus, nombreEtudes }) {
  return(
    <>
      <Link href="/intervenant/22" passHref>
        <button className="my-2 text-blue-900 underline">
          {nom}
        </button>
      </Link>
      <p className="my-2">{campus}</p>
      <p className="my-2">{nombreEtudes}</p>
    </>
  );
}