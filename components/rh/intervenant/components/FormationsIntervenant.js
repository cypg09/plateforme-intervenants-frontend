import React from "react";
import CardFormation from "./gridComponents/CardFormation";

export default function FormationsIntervenant({ intervenantId }) {
  const [formations, setFormations] = React.useState([]);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(()=> {
    if (!hasLoaded) {
      setFormations([
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
      <CardFormation
        state={1}
        key={index}
        />
    );
  })

  const createCards = () => {
    let cards = [];
    formations.forEach((formation) => {
      cards.push(
        <CardFormation
          state={2}
          formation={formation}
          key={formation.id}
          />
      );
    })
    return cards;
  }

  return(
    <>
      <h1 className="mt-8 mb-5 text-5xl font-bold">Formations</h1>
      <div className="grid grid-cols-2">

        { !hasLoaded && // Loading animation
        <>
          {loadingCards}
        </>
        }

        { hasLoaded && !formations.length &&
        <>
          <CardFormation
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