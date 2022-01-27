import React from 'react';
import NombrePostulants from './NombrePostulants';
import CardPostulant from './CardPostulant';

export default function CardPhase({ pid }) {
  const [incrementation, setIncrementation] = React.useState("22_09_34");
  const [nomDuClient, setNomDuClient] = React.useState("Jouéclub");
  const [type, setType] = React.useState("Etude de marché");
  const [remuneration, setRemuneration] = React.useState(930);
  const [dateDeSignature, setDateDeSignature] = React.useState("2021_12_07");
  const [nombreDePostulants, setNombreDePostulants] = React.useState(8);
  const [nombreDePostulantsPremium, setNombreDePostulantsPremium] = React.useState(3);
  const [intervenants, setIntervenants] = React.useState([
    {
      id: 1,
      prenom: "Patrick", 
      nom: "Dumin", 
      promo: "L3",
      campus: "Paris",
      email: "test@skema.edu",
      phone: "08 88 88 88 88",
      nombreEtudesRealisees: 13,
      isPremium: false,
    }, {
      id: 1,
      prenom: "Patrick", 
      nom: "Dumin", 
      promo: "L3",
      campus: "Paris",
      email: "test@skema.edu",
      phone: "08 88 88 88 88",
      nombreEtudesRealisees: 13,
      isPremium: true
    }
  ]);
  const [postulants, setPostulants] = React.useState([
    {
      id: 1,
      prenom: "Patrick", 
      nom: "Dumin", 
      promo: "L3",
      campus: "Paris",
      email: "test@skema.edu",
      phone: "08 88 88 88 88",
      nombreEtudesRealisees: 13,
      isPremium: false,
    }, {
      id: 1,
      prenom: "Patrick", 
      nom: "Dumin", 
      promo: "L3",
      campus: "Paris",
      email: "test@skema.edu",
      phone: "08 88 88 88 88",
      nombreEtudesRealisees: 13,
      isPremium: true
    }
  ]);

  React.useEffect(() => {
    // pid
    //fetch("localhost")

  })

  return(
    <div className="grid grid-cols-4 justify-center items-center px-5 py-12 mt-8 bg-white rounded-2xl">

      <h1 className='col-span-3 text-4xl'>
        <span className='text-7xl font-bold'>{ type }</span> 
        {" "}pour{" "}
        <span className="uppercase">{ nomDuClient }</span>
      </h1>

      <div>
        <p className='font-mono text-6xl font-semibold text-blue-800'>{ remuneration }€</p>
        <p className='font-mono text-xl'>signée le {" "}
          <span className='text-blue-800'>
            { dateDeSignature }
          </span>
        </p>
        <NombrePostulants 
          nombreDePostulants={nombreDePostulants}
          nombreDePostulantsPremium={nombreDePostulantsPremium}
        />
      </div>

      <div className='col-span-4 mt-4 ml-20 text-left'>
        <h2 className='text-4xl font-bold'>Intervenants validés</h2>
      </div>

      <div className='col-span-4 mb-4'/>

      {
        intervenants.map((intervenant) => {
          return(
            <div className='col-span-1 m-3'>
              <CardPostulant 
                id={intervenant.id}
                prenom={intervenant.prenom}
                nom={intervenant.nom}
                email={intervenant.email}
                phone={intervenant.phone}
                promo={intervenant.promo}
                campus={intervenant.campus}
                nombreEtudesRealisees={intervenant.nombreEtudesRealisees}
                isPremium={intervenant.isPremium}
                isValide={true}
              />
            </div>
          );
        })
      }

      <div className='col-span-4 mt-4 ml-20 text-left'>
        <h2 className='text-4xl font-bold'>Postulants</h2>
      </div>

      <div className='col-span-4 mb-4'/>

      {
        postulants.map((postulant) => {
          return(
            <div className='col-span-1 m-3'>
              <CardPostulant 
                id={postulant.id}
                prenom={postulant.prenom}
                nom={postulant.nom}
                email={postulant.email}
                phone={postulant.phone}
                promo={postulant.promo}
                campus={postulant.campus}
                nombreEtudesRealisees={postulant.nombreEtudesRealisees}
                isPremium={postulant.isPremium}
              />
            </div>
          );
        })
      }
    </div>
  );
}
