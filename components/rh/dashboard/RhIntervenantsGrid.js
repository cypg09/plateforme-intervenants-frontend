import React from "react";
import IntervenantRow from "./IntervenantRow";
import SortFilterRhIntervenantsGrid from "./SortFilter/SortFilterRhIntervenantsGrid";

export default function RhIntervenantsGrid() {
  const defaultIntervenants = [
    {
      nom: "Test",
      campus: "Paris",
      nombreEtudes: 4,
    },
    {
      nom: "Test2",
      campus: "Lille",
      nombreEtudes: 4,
    },
    {
      nom: "Test3",
      campus: "Sophia",
      nombreEtudes: 4,
    },

    {
      nom: "Test",
      campus: "Blabla",
      nombreEtudes: 4,
    },
    {
      nom: "Test6",
      campus: "Paris",
      nombreEtudes: 4,
    },
  ];

  const [intervenants, setIntervenants] = React.useState(defaultIntervenants);


  //if (!intervenants.length) {
  //  return(<p className="mt-16 text-lg">Pas encore d'intervenants inscrits !</p>)
  //}

  return(
    <>

      <SortFilterRhIntervenantsGrid
        defaultIntervenants={defaultIntervenants}
        setIntervenants={setIntervenants}
      />

      <div className="grid grid-cols-3 p-8 mt-2 bg-white rounded-2xl">
        <p className="font-bold md:text-lg">Nom</p>
        <p className="font-bold md:text-lg">Campus</p>
        <p className="font-bold md:text-lg">Nombre de phases en ce moment</p>

        {
          intervenants.map((intervenant) => {
            return (
              <IntervenantRow 
                key={intervenants.indexOf(intervenant)} 
                nom={intervenant.nom} 
                campus={intervenant.campus} 
                nombreEtudes={intervenant.nombreEtudes} 
              />);
          })
        }

      </div>
    </>
  );
}