import Link from "next/link";

export default function CardFormation({ state, formation }) {
  // state = 0:empty 1:loading 2:loaded

  if (state === 0) {
    return (
      <div className={`col-span-full p-3 m-1`}>
        <p className="p-3 py-8">Pas encore de formations ici !</p>
      </div>
    );
  }

  if (state === 1) {
    return(
    <>
      <card className="col-span-full p-5 m-2 rounded-2xl animate-pulse md:col-span-1 lg:col-span-full bg-slate-400 text-slate-400">
        <p className="my-28">Chargement...</p>
      </card>
    </>
    );
  }

  return(
    <>
      <card className="col-span-full p-5 m-2 bg-white rounded-3xl md:col-span-1 lg:col-span-full">
        <h2 className="text-3xl font-extrabold">
          Formation Adobe Illustrator
        </h2>
        <p className="my-12 text-xl font-semibold text-blue-900">
          <p><span className="text-lg font-medium text-black">Passée en </span>03/2021</p>
        </p>
      </card>
    </>
  );
}