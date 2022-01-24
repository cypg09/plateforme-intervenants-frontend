import Link from "next/link";

export default function BanniereProposerEtude() {
  return(
    <>
      <Link 
        href={"/dashboard/rh/nouvelle-etude"}
        passHref
      >
        <button className={"px-5 py-3 text-lg text-white bg-blue-700 rounded-xl"}>
          {"Proposer une nouvelle étude"}
        </button>
      </Link>
    </>
  );
}