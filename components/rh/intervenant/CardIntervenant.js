import React from "react"
import DescriptionIntervenant from "./components/DescriptionIntervenant";
import FormationsIntervenant from "./components/FormationsIntervenant";
import GridEtudesIntervenant from "./components/GridEtudesIntervenant";

export default function CardIntervenant({ id }) {
  const [intervenant, setIntervenant] = React.useState({});
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(()=> {
    if (!hasLoaded) {
      setIntervenant({
        id:3, prenom:"test", nom:"nom", isPremium: true, promo: "L3", campus: "Paris", email: "sdurivau@skema.edu", phone: "06 87 98 03 21"
      });
      setHasLoaded(true);
    }
  })

  return(
    <>
      <>
        {/* We send intervenant to DescriptionIntervenant component: 
        This component updates its state according to intervenant.id. 
        If intervenant.id doesn't exist, 
        then the API hasn't be fetched and it returns an animate-pulse loading animation. 
        Else, it returns its description.
         */}
        <DescriptionIntervenant 
          intervenant={intervenant}
        />
        <div className="grid grid-cols-3">
          {/* We send intervenant to GridEtudesIntervenant :
            if no intervenant.id, then loading animation
            else, loading animation while fetching the api 
            finally, display the etudes or "Pas d'etudes ici"
          */}
          {/* etudeStatus : 1=postulees, 2=enCours, 3=realisee */}
          <div className="col-span-full mt-8 lg:col-span-2">
            <GridEtudesIntervenant
              etudesStatus={1}
              intervenant={intervenant}
              />
            <GridEtudesIntervenant
              etudesStatus={2}
              intervenant={intervenant}
              />
            <GridEtudesIntervenant
              etudesStatus={3}
              intervenant={intervenant}
              />
          </div>

          <div className="col-span-full mt-8 lg:col-span-1">
            <FormationsIntervenant
              />
          </div>

        </div>
      </>
    </>
  )
}