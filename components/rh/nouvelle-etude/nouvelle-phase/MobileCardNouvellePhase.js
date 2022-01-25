import React from "react"

export default function MobileCardNouvellePhase({ id, typeDePhase, remuneration, dateDeDebut, dateDeFin, campus, description, phases, setPhases }) {
  const deleteSelf = () => {
    let copyOfPhases = [...phases];
    copyOfPhases.splice(id, 1);
    setPhases(copyOfPhases);
  }

  return(
    <div className="px-1 py-5 mb-3 bg-white rounded-lg border">
      <p><span className="font-bold">Type de phase : </span>{ typeDePhase }</p>
      <p><span className="font-bold">Rémunération : </span>{ remuneration }</p>
      <p><span className="font-bold">Date de début : </span>{ dateDeDebut }</p>
      <p><span className="font-bold">Date de fin : </span>{ dateDeFin }</p>
      <p><span className="font-bold">Campus : </span>{ campus }</p>
      <p className="col-span-3">{ description }</p>
      <div cassName="text-right">
        <button className="mx-1 text-right text-red-700" onClick={deleteSelf}>
          Supprimer
        </button>
      </div>
    </div>
  )
}