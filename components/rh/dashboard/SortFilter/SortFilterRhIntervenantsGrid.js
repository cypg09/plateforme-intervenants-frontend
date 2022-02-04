import React from "react";
import FilterButton from "./FilterButton";

export default function SortFilterRhIntervenantsGrid({ defaultIntervenants, setIntervenants }) {
  const campuses = ["Tous", "Paris", "Lille", "Sophia"];

  const [displayFilter, setDisplayFilter] = React.useState(false);
  const [displaySort, setDisplaySort] = React.useState(false);
  const [currentSort, setCurrentSort] = React.useState("Nombre d'études");

  const [campusFilter, setCampusFilter] = React.useState("Tous");

  const toggleFilter = () => {
    setDisplayFilter(!displayFilter);
  }
  const toggleSort = () => {
    setDisplaySort(!displaySort);
  }

  return(
    <>
      <div className="flex mt-16">
        <button 
          className={`relative px-4 py-2 m-2 ${displayFilter ? "text-white bg-gray-600" : "bg-white"} rounded-xl`}
          onClick={toggleFilter}
        >
          <span className="font-bold">Campus : </span>{campusFilter}
        </button>

        <button 
          className={`relative px-4 py-2 m-2 ${displaySort ? "text-white bg-gray-600" : "bg-white"} rounded-xl`}
          onClick={toggleSort}
        >
          <span className="font-bold">Trier par : </span>{currentSort}
        </button>
      </div>

      <div className="mx-2">

          { displayFilter && 
          <>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
              {/* Filtrer par campus */}
                <p className="col-span-full px-5 py-2 m-2 text-black rounded-xl md:col-span-1">Campus :</p>
                {campuses.map((campus) => {
                  return(
                    <FilterButton 
                      key={campuses.indexOf(campus)} 
                      target={campus} 
                      setFilter={setCampusFilter} 
                      toggleFilter={toggleFilter} 
                      setIntervenants={setIntervenants} 
                      defaultIntervenants={defaultIntervenants}
                  />
                  )
                })}
            </div>
          </>
          }

          { displaySort && 
          <div className="flex mb-2">
            <div className="px-5 py-2 bg-white rounded-xl">
              <button>Sort shown</button>
            </div>
          </div>
          }

      </div>
    </>
  );
}