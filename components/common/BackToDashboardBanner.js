import Link from "next/link";


export default function BackToDashboardBanner() {
  return (
    <>
      <Link 
        href={"/dashboard"}
        passHref
      >
        <button className={"flex items-center px-5 py-2 m-1 text-lg text-teal-400 bg-white rounded-2xl hover:bg-teal-300 hover:text-white"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour
        </button>
      </Link>
    </>
  );
}
