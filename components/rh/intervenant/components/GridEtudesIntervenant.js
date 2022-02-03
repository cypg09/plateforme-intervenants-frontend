import React from "react";

import CardEtudeIntervenant from "./gridComponents/CardEtudeIntervenant";

export default function GridEtudesIntervenant({ etudesStatus, intervenant }) {
  const [etudes, setEtudes] = React.useState([]);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(()=> {
    if (!hasLoaded) {
      setEtudes([
        {
          id:3, prenom:"test", nom:"nom", isPremium: true, promo: "L3", campus: "Paris", email: "sdurivau@skema.edu", phone: "06 87 98 03 21"
        },

        {
          id:3, prenom:"test", nom:"nom", isPremium: true, promo: "L3", campus: "Paris", email: "sdurivau@skema.edu", phone: "06 87 98 03 21"
        },
        {
          id:3, prenom:"test", nom:"nom", isPremium: true, promo: "L3", campus: "Paris", email: "sdurivau@skema.edu", phone: "06 87 98 03 21"
        }
    ]);
      setHasLoaded(true);
    }
  })

  let loadingCards = [];
  [...Array(2)].forEach((index) => {
    loadingCards.push(
      <CardEtudeIntervenant
        state={1}
        key={index}
        />
    );
  })

  const createCards = () => {
    let cards = [];
    etudes.forEach((etude) => {
      cards.push(
        <CardEtudeIntervenant
          state={2}
          etude={etude}
          key={etude.id}
          />
      );
    })
    return cards;
  }

  // etudeStatus : 1=postulees, 2=enCours, 3=realisee
  let title = etudesStatus === 1 ? "Etudes postulées" : etudesStatus === 2 ? "Etudes en cours" : "Etudes réalisées";

  return(
    <>
      <h1 className="mt-8 mb-5 text-5xl font-bold">{ title }</h1>
      <div className="grid grid-cols-2">

        { !hasLoaded && // Loading animation
        <>
          {loadingCards}
        </>
        }

        { hasLoaded && !etudes.length &&
        <>
          <CardEtudeIntervenant
            state={0}
          />
        </>
        }

        { hasLoaded && 
        <>
          {createCards()}
        </>
        }

      </div>
    </>
  );
}