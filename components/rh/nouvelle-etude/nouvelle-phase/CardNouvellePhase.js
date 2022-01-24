import React from "react"

export default function CardNouvellePhase({ id, typeDePhase, remuneration, dateDeDebut, dateDeFin, campus, description, phases, setPhases }) {
  const deleteSelf = () => {
    let copyOfPhases = [...phases];
    copyOfPhases.splice(id, 1);
    setPhases(copyOfPhases);
  }

  return(
    <>
      <span>{ typeDePhase }</span>
      <span>{ remuneration }</span>
      <span>{ dateDeDebut }</span>
      <span>{ dateDeFin }</span>
      <span>{ campus }</span>
      <span className="col-span-3">{ description }</span>
      <div cassName="text-right">
        <button className="mx-1 text-right text-red-700" onClick={deleteSelf}>
          Supprimer
        </button>
      </div>
    </>
  )
}