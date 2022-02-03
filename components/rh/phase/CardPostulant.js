import Link from "next/link";

export default function CardPostulant({ id, prenom, nom, email, phone, promo, campus, nombreEtudesRealisees, isPremium, isValide =false}){
  const isPremiumColor = isPremium ? "bg-amber-100 " : "bg-gray-100";

  return(
    <>
      <div className={`grid grid-cols-6 p-4 rounded-2xl ${isPremiumColor}`}>

        <div className="col-span-2 font-bold text-left">
          <p>{ promo }</p>
          <p>{ campus }</p>
        </div>

        <p className="col-span-2 text-center">
          <span className="text-lg font-bold">{ "4.5/5" }</span>
        </p>

        <p className="col-span-2 text-right">
          <span className="text-xl font-bold">{ nombreEtudesRealisees }</span>
          <p className="text-xs">{" "}missions réalisées pour Skema Conseil</p>
        </p>

        <div className="col-span-6">
          <p className={`my-2 text-4xl font-bold`}>{ prenom } { nom }</p>
          <p type="email" className="underline">{ email }</p>
          <p>{ phone }</p>
        </div>

        <div className="col-span-4 col-start-2 mt-3 mb-2">
          <Link href={`/intervenant/${id}`}>
            <button className="px-5 py-2 m-1 text-white bg-blue-900 rounded-2xl">
              Voir la fiche de l'intervenant
            </button>
          </Link>
        </div>

      { !isValide && 
      <>
        <div className="col-span-3">
          <button className="px-7 py-3 m-1 text-white bg-green-800 rounded-2xl">
            Accepter
          </button>
        </div>

        <div className="col-span-3">
          <button className="px-7 py-3 m-1 text-white bg-red-800 rounded-2xl">
            Refuser
          </button>
        </div>
      </>
      }

      { isValide &&
      <>
        <div className="col-span-4 col-start-2">
          <button className="px-5 py-2 m-1 text-white bg-red-800 rounded-2xl">
            Rétrograder en postulant
          </button>
        </div>
      </>
      }

      </div>
    </>
  );
}