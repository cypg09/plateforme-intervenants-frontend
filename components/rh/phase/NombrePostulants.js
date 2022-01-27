export default function NombrePostulants({ nombreDePostulants, nombreDePostulantsPremium }) {
  return(
    <>
      <div className="p-5 text-black rounded-2xl">
        <p className="align-middle">
          <span className="text-gray-500">
            <span className="text-5xl font-bold">{ nombreDePostulants }</span>
            {" "}postulant{nombreDePostulants > 1 ? "s" : ""}
          </span>
          <span className="text-yellow-500">
            {" "} dont {" "}
            <span className="text-5xl font-bold">{ nombreDePostulantsPremium }</span>
            {" "}premium{ nombreDePostulantsPremium > 1 ? "s" : "" }
          </span>
        </p>
      </div>
    </>
  )
}