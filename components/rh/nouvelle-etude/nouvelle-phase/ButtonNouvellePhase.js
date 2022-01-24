export default function ButtonNouvellePhase({ showPhaseForm, onClick }) {
  let defaultClassName = "px-5 py-3 text-lg text-white bg-blue-700 rounded-xl" + " ";

  const handleClick = () => {
    onClick("test", 40);
  }
  return(
    <>
      <button 
        className={ !showPhaseForm ? defaultClassName : "hidden"}
        onClick={handleClick}
      >
        { !showPhaseForm ? "Ajouter une nouvelle phase" : "Annuler la phase" }
      </button>
    </>
  );
}