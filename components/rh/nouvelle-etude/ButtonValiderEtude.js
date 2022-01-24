import Router from "next/router";

export default function ButtonValiderEtude({ showPhaseForm, onClick }) {
  const handleClick = () => {
    Router.push('/dashboard');
  }

  return(
    <button 
      className={"inset-x-0 px-5 py-3 m-auto text-lg text-white bg-green-800 rounded-xl drop-shadow-xl"}
      onClick={handleClick}
    >
      Valider la nouvelle étude
    </button>
  );
}