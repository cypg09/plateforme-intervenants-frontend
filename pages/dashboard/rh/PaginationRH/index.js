import PaginationButton from "./PaginationButton";

export default function PaginationRH({ nombreDePagesTotal, currentPageNumber, setNewPageNumber }) {
  let pagination = [];
  let minSlice = Math.max(1, currentPageNumber-3);
  let maxSlice = Math.min(nombreDePagesTotal, currentPageNumber+3);
  let initArray = Array.from(Array(nombreDePagesTotal).keys());
  let defaultPagination = initArray.slice(minSlice, maxSlice);
  for (let i of defaultPagination) {
    pagination.push(
      <PaginationButton
        targetPage={i}
        isCurrentPage={i===currentPageNumber}
        />
    );
  }
  return(
    <>
    { pagination }
    </>
  );
}