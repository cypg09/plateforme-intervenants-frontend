import React from "react";

export default function EtudesOuIntervenantsBanner({ showEtudes, setShowEtudes }) {
  const classNameSelected = "text-white bg-blue-700";
  const classNameNotSelected = "text-blue-700 bg-white";

  const setShowEtudesTrue = () => {
    setShowEtudes(true);
  }

  const setShowEtudesFalse = () => {
    setShowEtudes(false);
  }

  let Layout = () => {
    return(
      <div className="grid grid-cols-12 mt-8">
        <div 
          className={`col-span-2 col-start-5 rounded-l-2xl ${showEtudes ? classNameSelected : classNameNotSelected}`}
          onClick={setShowEtudesTrue}
        >
          <button 
            className={`p-4`}
          >
            Etudes
          </button>
        </div>
        <div 
          className={`col-span-2 rounded-r-2xl ${showEtudes ? classNameNotSelected : classNameSelected}`}
          onClick={setShowEtudesFalse}
        >
          <button 
            className={`p-4`}
          >
            Intervenants
          </button>
        </div>
      </div>
    );
  }

  return(
    <>
    <Layout/>
    </>
  );
}