export default function FilterButton({ target, setFilter, toggleFilter, setIntervenants, defaultIntervenants }) {
  const applyFilter = () => {
    if (target === "Tous") {
      setIntervenants(defaultIntervenants);
    } else {
      let nextIntervenants = defaultIntervenants.filter(intervenant => intervenant.campus === target);
      setIntervenants(nextIntervenants);
    }
  }
  const handleClick = (campus) => {
    setFilter(campus);
    applyFilter();
    toggleFilter();
  }
  return(
    <>
      <button className="px-5 py-2 m-2 bg-white rounded-xl" onClick={() => handleClick(target)}>{target}</button>
    </>
  );
}