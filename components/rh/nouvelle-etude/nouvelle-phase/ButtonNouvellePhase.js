export default function ButtonNouvellePhase({ onClick }) {
  return(
    <button 
      className={"inset-x-0 items-center px-5 py-3 m-auto text-lg text-white bg-blue-800 rounded-xl drop-shadow-xl"}
      onClick={onClick}
    >
      Ajouter une nouvelle phase
    </button>
  );
}