import React from "react";
import CardNouvellePhase from "../nouvelle-etude/nouvelle-phase/CardNouvellePhase";
import { useRouter } from "next/router";

export default function CardEtude({ eid }) {
  const router = useRouter()
  const [incrementation, setIncrementation] = React.useState("22_09_34");
  const [nomDuClient, setNomDuClient] = React.useState("Jouéclub");
  const [dateDeSignature, setDateDeSignature] = React.useState("2021_12_07");
  const [phases, setPhases] = React.useState([
    {
      incrementation: "22_73_09",
      nomDuClient: "Grenet",
      typeDePhase: "Etude de marché",
      remuneration: "400",
      dateDeDebut: "02/03/2021",
      dateDeFin: "02/03/2021",
      campus: "Paris",
      description: "Test",
    }
  ]);

  React.useEffect(() => {
    // fetch phases
  });

  return(
    <>
      <div className="grid grid-cols-1 px-4 py-5 m-auto my-3 w-full bg-white rounded-xl border md:grid-cols-4">
        <p>Incrémentation : <span className="font-bold">{ incrementation }</span></p>
        <p>Nom de l'étude : <span className="font-bold uppercase">{ nomDuClient }</span></p>
        <p>Date de signature : <span className="font-bold">{ dateDeSignature }</span></p>
        <p>
          <button className="text-red-700 md:text-right" onClick={()=>{router.push("/dashboard")}}>
            Supprimer l'étude et ses phases
          </button>
          <p className="text-sm italic">
            Enverra un mail aux intervenants et aux postulants pour leur dire que l'étude est annulée.
          </p>
        </p>
      </div>

      <h1 className="mt-12 mb-3 text-4xl font-bold">Les phases</h1>
      <div className="grid grid-cols-3 px-4 py-5 m-auto my-3 w-full bg-white rounded-xl border md:grid-cols-9">
        <p className="font-bold">Type de phase</p>
        <p className="font-bold">Rémunération</p>
        <p className="font-bold">Date de début</p>
        <p className="font-bold">Date de fin</p>
        <p className="font-bold">Campus</p>
        <p className="col-span-3 font-bold">Description</p>
        <p></p>
        { phases.map((phase) => {
            return (<CardNouvellePhase 
              key={phases.indexOf(phase)}
              id={phases.indexOf(phase)}
              typeDePhase={phase.typeDePhase} 
              remuneration={phase.remuneration} 
              dateDeDebut={phase.dateDeDebut}
              dateDeFin={phase.dateDeFin}
              campus={phase.campus}
              description={phase.description}
              phases={phases}
              setPhases={setPhases}
              linkToEtude={true}
              />)
          })
        }
      </div>
    </>
  );
}