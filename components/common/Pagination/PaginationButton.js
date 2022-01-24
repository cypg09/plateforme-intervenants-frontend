export default function PaginationButton({ targetPage, setNewPage, isCurrentPage =false }) {
  let defaultClassName = "px-2 py-1 m-1 text-teal-400 rounded-md border border-teal-400 shadow hover:bg-teal-50" + " ";
  if (isCurrentPage) {
    defaultClassName += "bg-teal-400 text-teal-50 hover:text-teal-400 hover:bg-teal-300";
  }
  const handleClick = () => {
    setNewPage(targetPage);
  }
  return(
    <>
      <button className={defaultClassName} onClick={handleClick}>
        { String(targetPage) }
      </button>
    </>
  );
}