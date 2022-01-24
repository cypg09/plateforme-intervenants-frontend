export default function CardNouvellePhase({ typeDePhase, remuneration, dateDeDebut, description }) {
  return(
    <>
      <span>{ typeDePhase }</span>
      <span>{ remuneration }</span>
      <span>{ dateDeDebut }</span>
      <span className="col-span-3">{ description }</span>
      <div cassName="text-right">
        <button className="mx-1 text-right text-blue-700" onClick={()=>{}}>
          Modifier
        </button>
        <button className="mx-1 text-right text-red-700" onClick={()=>{}}>
          Supprimer
        </button>
      </div>
    </>
  )
}