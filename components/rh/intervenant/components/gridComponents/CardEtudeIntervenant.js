import Link from "next/link";

export default function CardEtudeIntervenant({ state, etude, intervenant }){
  // state = 0:empty 1:loading 2:loaded

  //let finalInfo = etude.status === 9 ? intervenant.ratings[etude.incrementation] : etude.remuneration;

  if (state === 0) {
    return (
      <div className={`col-span-full p-3 m-1`}>
        <p className="p-3 py-8">Pas encore d'étude ici !</p>
      </div>
    );
  }

  if (state === 1) {
    return(
    <>
      <card className="col-span-full p-5 m-2 rounded-2xl animate-pulse md:col-span-1 bg-slate-400 text-slate-400">
        <p className="my-28">Chargement...</p>
      </card>
    </>
    );
  }

  return(
    <>
      <card className="col-span-full p-5 m-2 bg-white rounded-2xl md:col-span-1">
        <h2 className="text-3xl font-extrabold">
          Etude de marché
        </h2>
        <p className="my-12 text-xl font-semibold text-blue-900">
          <p>nomEtude</p>
          <p>03/2021</p>
          <p>4/5</p>
        </p>
        <Link href="/etude/1">
          <button className="px-5 py-1 text-lg text-white bg-blue-800 rounded-xl">
            Voir l'étude
          </button>
        </Link>
      </card>
    </>
  )
}