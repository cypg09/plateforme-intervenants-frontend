import PaginationButton from "./PaginationButton";

export default function PaginationRH({ nombreDePagesTotal, currentPageNumber, setNewPageNumber }) {
  console.log(nombreDePagesTotal);
  let pagination = [];
  let minSlice = Math.max(1, currentPageNumber-9);
  let maxSlice = Math.min(nombreDePagesTotal, currentPageNumber+9);
  let initArray = Array.from(Array(nombreDePagesTotal+1).keys());
  let defaultPagination = initArray.slice(minSlice, maxSlice+1);
  console.log(defaultPagination);
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