import React from "react";

export default function RhIntervenantsGrid() {
  const [intervenants, setIntervenants] = React.useState([]);

  //if (!intervenants.length) {
  //  return(<p className="mt-16 text-lg">Pas encore d'intervenants inscrits !</p>)
  //}

  return(
    <>
      <div className="grid grid-cols-3 p-8 mt-16 bg-white rounded-2xl">
        <p className="text-lg font-bold">Nom</p>
        <p className="text-lg font-bold">Campus</p>
        <p className="text-lg font-bold">Nombre de phases en ce moment</p>

        <p className="my-2">Test</p>
        <p className="my-2">Test</p>
        <p className="my-2">3</p>

        <p className="my-2">Test</p>
        <p className="my-2">Test</p>
        <p className="my-2">4</p>
      </div>
    </>
  );
}