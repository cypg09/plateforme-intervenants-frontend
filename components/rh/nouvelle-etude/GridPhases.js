import CardNouvellePhase from "./nouvelle-phase/CardNouvellePhase";
import MobileCardNouvellePhase from "./nouvelle-phase/MobileCardNouvellePhase";


export default function GridPhases({ phases, setPhases }) {
  return(
    <>
      <h1 className="mt-12 mb-3 text-4xl font-bold">Les phases</h1>
      <div className="hidden md:block">
        <div className="grid grid-cols-3 px-4 py-5 m-auto my-3 w-full bg-white rounded-xl border md:grid-cols-9">
          <p className="font-bold">Type de phase</p>
          <p className="font-bold">Rémunération</p>
          <p className="font-bold">Date de début</p>
          <p className="font-bold">Date de fin</p>
          <p className="font-bold">Campus</p>
          <p className="col-span-3 font-bold">Description</p>
          <p></p>
          { phases.map((phase) => {
              return <CardNouvellePhase 
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
                />
            })
          }
        </div>
      </div>
      <div className="md:hidden">
      { phases.map((phase) => {
                    return <MobileCardNouvellePhase 
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
                      />
                  })
      }
      </div>
    </>
  );
}