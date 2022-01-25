export default function SubCardNombrePostulants({ nombreDePostulants, nombreDePostulantsPremium }) {
  return(
    <>
      <div className="p-5 text-white bg-blue-900 rounded-2xl">
        <p className="align-middle">
          <span className="text-5xl font-bold">{ nombreDePostulants }</span>
          {" "}postulant{nombreDePostulants > 1 ? "s" : ""}, dont {" "}
          <span className="text-amber-400">
            <span className="text-5xl font-bold">{ nombreDePostulantsPremium }</span>
            {" "}premium{ nombreDePostulantsPremium > 1 ? "s" : "" }
          </span>
        </p>
      </div>
    </>
  )
}