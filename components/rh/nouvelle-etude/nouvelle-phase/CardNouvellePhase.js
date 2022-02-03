import React from "react"
import Link from "next/link";

export default function CardNouvellePhase({ id, typeDePhase, remuneration, dateDeDebut, dateDeFin, campus, description, phases, setPhases, linkToEtude=false }) {
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
      <div className="text-right">
        { !linkToEtude && 
          <button className="mx-1 text-right text-red-700" onClick={deleteSelf}>
            Supprimer
          </button>
        }
        { linkToEtude && 
        <Link href={`/phase/${id}`}>
          <button className="mx-1 text-right text-blue-700">
            Voir la phase
          </button>
        </Link>
        }
      </div>
    </>
  )
}