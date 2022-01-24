import CardNouvellePhase from "./nouvelle-phase/CardNouvellePhase";


export default function GridPhases({ phases, setPhases }) {
  return(
    <>
      <h1 className="mt-12 text-4xl font-bold">Les phases</h1>
      <div className="grid grid-cols-3 px-4 py-5 m-auto my-3 w-full bg-gray-100 rounded-xl border md:grid-cols-7">
        <p className="font-bold">Type de phase</p>
        <p className="font-bold">Rémunération</p>
        <p className="font-bold">Date de début</p>
        <p className="col-span-3 font-bold">Description</p>
        <p></p>
          { 
            phases.map((phase) => {
              return <CardNouvellePhase 
                key={phases.indexOf(phase)}
                id={phases.indexOf(phase)}
                typeDePhase={phase.typeDePhase} 
                remuneration={phase.remuneration} 
                dateDeDebut={phase.dateDeDebut}
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