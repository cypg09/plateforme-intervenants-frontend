export default function PaginationButton({ targetPage, setNewPage, isCurrentPage =false }) {
  let defaultClassName = "px-2 py-1 m-1 text-blue-800 rounded-md border border-blue-800 shadow hover:bg-blue-50" + " ";
  if (isCurrentPage) {
    defaultClassName += "bg-blue-800 text-white hover:bg-blue-800";
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