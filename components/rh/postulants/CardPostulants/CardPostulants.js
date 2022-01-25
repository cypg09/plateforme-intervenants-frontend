import { useRouter } from 'next/router';
import React from 'react';
import SubCardNombrePostulants from './SubCardNombrePostulants';

export default function CardPostulants() {
  const router = useRouter();
  const [incrementation, setIncrementation] = React.useState("22_09_34");
  const [nomDuClient, setNomDuClient] = React.useState("Jouéclub");
  const [type, setType] = React.useState("Etude de marché");
  const [remuneration, setRemuneration] = React.useState(930);
  const [dateDeSignature, setDateDeSignature] = React.useState("2021_12_07");
  const [nombreDePostulants, setNombreDePostulants] = React.useState(8);
  const [nombreDePostulantsPremium, setNombreDePostulantsPremium] = React.useState(3);
  const { pid } = router.query;

  React.useEffect(() => {
    //fetch("localhost")

  })

  return(
    <div className="grid grid-cols-4 px-5 py-12 mt-8 bg-white rounded-2xl">
      <h1 className='col-span-3 text-4xl'>
        <span className='text-6xl font-bold'>{ type }</span> 
        {" "}pour{" "}
        <span className="uppercase">{ nomDuClient }</span>
      </h1>
      <span>
        <p className='font-mono text-6xl font-semibold text-blue-800'>{ remuneration }€</p>
        <p className='font-mono text-xl'>signée le {" "}
          <span className='text-blue-800'>
            { dateDeSignature }
          </span>
        </p>
      </span>

      <div className='col-span-2 col-start-2'>
        <SubCardNombrePostulants 
          nombreDePostulants={nombreDePostulants}
          nombreDePostulantsPremium={nombreDePostulantsPremium}
        />
      </div>
      
    </div>
  );

}
