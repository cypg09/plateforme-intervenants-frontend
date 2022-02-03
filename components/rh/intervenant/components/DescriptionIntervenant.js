import React from "react";

export default function DescriptionIntervenant({ intervenant }) {
  let isPremiumText = intervenant.isPremium ? "Premium" : "Non-premium";
  let isPremiumColor = intervenant.isPremium ? "text-yellow-500" : "text-black";

  return(
    <div className="grid grid-cols-6 px-5 py-12 mx-1 mt-8 bg-white rounded-2xl">
      <h1 className="col-span-full lg:m-3 lg:col-span-5">
        {/* Chargement en cours ...*/}
        {!intervenant?.id &&
        <>
          <p className="p-3 my-1 rounded animate-pulse bg-slate-400 text-slate-400">
            Prenom Nom
          </p>


        </>
        }
        {/* Intervenant chargé */}
        {intervenant?.id &&
          <p className="text-5xl font-bold">
            { intervenant.prenom }
            {" "}
            { intervenant.nom }
          </p>
        }

      </h1>

      <p className="col-span-full text-center lg:m-3 lg:col-span-1">
        {/*Chargement en cours... */}
        {!intervenant?.id &&
        <>
          <p className="py-8 rounded animate-pulse bg-slate-400 text-slate-400">
            Chargement...
          </p>
        </>
        }

        {/* Chargé */}
        {intervenant?.id &&
          <p className={`mt-2 text-3xl font-bold lg:mt-0 ${isPremiumColor}`}>
            { intervenant.isPremium ? "Premium" : "Non premium" }
          </p>
        }

      </p> 

      <div className="grid grid-cols-2 col-span-full self-center lg:m-3">
        {/*Chargement en cours... */}
        {!intervenant?.id &&
        <>
          <p className="col-span-2 p-3 m-1 my-1 w-full rounded animate-pulse lg:col-span-1 bg-slate-400 text-slate-400">
            Chargement
          </p>
          <p className="col-span-2 p-3 m-1 my-1 w-full rounded animate-pulse lg:col-span-1 bg-slate-400 text-slate-400">
            Chargement
          </p>
        </>
        }
        {/* Intervenant chargé */}
        {intervenant?.id &&
        <>
          <p className="col-span-2 mt-4 font-semibold lg:text-3xl lg:col-span-1">
            { intervenant.promo }
            {" à "}
            { intervenant.campus }
          </p>
          <p className="col-span-2 mt-2 lg:text-xl lg:col-span-1">
            <a href={`mailto:${intervenant.email}`} className="underline">{ intervenant.email }</a>
            <p>{ intervenant.phone }</p>
          </p>
        </>
        }
      </div>
    </div>
  );
}