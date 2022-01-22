import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PaginationRH from "./PaginationRH";
import RhEtudeCard from "./RhEtudeCard";

export default function RhEtudeCardsGrid() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentPageNumber, setNewPageNumber] = useState(1);
  const [nombreDePagesTotal, setNombredePagesTotal] = useState(9);

  
  useEffect(() => {
    renderPagination();
    renderCards();
  }, [])

  

  const renderPagination = () => {
    fetch("http://127.0.0.1:8000/etude/nombreEtudes")
      .then((res) => (res.json()))
      .then((res) => {
        setNombredePagesTotal(Math.max(res.nombreEtudes % 30, 1))
      .catch((e) => console.warn("Error in updateNombreDePagesTotal: ", e))
  }

  // fetch cards from currentPageNumber to 30 if currentPageNumber === 1 else 1*currentPageNumber + 1 to 30*currentPageNumber
  const renderCards = (pageNumber) => {
    //fetch()
    //.then((res) => res.json())
    //.then()
    let cards = [];
    cards.push();
  }

  if (!hasLoaded) return <Loading />;

  return(
    <>
      <div className="grid grid-cols-1 gap-3 my-3 mt-12 md:gap-9 md:grid-cols-2 lg:grid-cols-3">
        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={2}
          nombreDePostulantsPremium={4}
        />

        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={12}
          nombreDePostulantsPremium={4}
        />
        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={12}
          nombreDePostulantsPremium={4}
        />
        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={12}
          nombreDePostulantsPremium={4}
        />
        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={12}
          nombreDePostulantsPremium={4}
        />
        <RhEtudeCard 
          incrementation={"22_73_09"}
          nomDuClient={"Grenet"}
          type={"Etude de marché"}
          remuneration={"400"}
          dateDeSignature={"02/03/2021"}
          nombreDePostulants={12}
          nombreDePostulantsPremium={4}
        />

      </div>
      <PaginationRH 
        nombreDePagesTotal={nombreDePagesTotal}
        currentPageNumber={currentPageNumber}
        setNewPageNumber={setNewPageNumber}
      />
    </>
  );
}