import CardLayout from "../../ui/CardLayout";
import Submit from "../../ui/Form/Submit";

export default function RhEtudeCard({ incrementation, nomDuClient, type, nombreDePostulants, nombreDePostulantsPremium, dateDeSignature, remuneration }) {
  return(
    <CardLayout>
      <h3 className="col-span-1 m-1 text-xl font-semibold text-right md:text-2xl">{ incrementation }</h3>
      <p className="col-span-1 m-1 text-xl font-semibold text-left uppercase md:text-2xl">{ nomDuClient }</p>
      <p className="col-span-2 text-lg italic md:mt-2">{ type }</p>
      <p className="col-span-1 text-lg md:text-left md:mx-6 md:col-span-2">
        <span className="text-xl font-bold text-blue-800 md:text-6xl">{ nombreDePostulants }</span>
        {" "} postulants {" "}
      </p>
      <p className="col-span-1 text-lg text-left md:mx-6 md:text-right md:mt-3 md:col-span-2">
        {" "} dont {" "}
        <span className="text-xl font-bold text-teal-500 md:text-4xl">{ nombreDePostulantsPremium }</span>
        {" "} premiums {" "} <br/>
      </p>
      <div className="col-span-1 mt-2 md:mt-6">
        <p className="text-left text-md">Signée le <span className="text-blue-800">{ dateDeSignature }</span></p>
        <p className="font-mono text-xl font-bold text-left text-blue-800 md:text-5xl">{ remuneration }€</p>
      </div>
      <div className="col-span-1 mt-2 md:mt-6">
        <Submit 
          defaultText={"Voir les postulants"} 
          loadingText={"Chargement..."}
        />
      </div>
    </CardLayout>
  );
}