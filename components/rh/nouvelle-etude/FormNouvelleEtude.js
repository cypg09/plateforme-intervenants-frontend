import FormLayout from "../../ui/Form/FormLayout";
import FormInput from "../../common/Form/FormInput";
import React from "react";


export default function FormNouvelleEtude({ 
  etudeIsCreated,
  setEtudeIsCreated,
  incrementation,
  setIncrementation,
  nomEtude,
  setNomEtude,
  dateSignature,
  setDateSignature,
  }) {
  // Si l etude n est pas cree, form pour remplir les donnees ; une fois que l etude est cree, se transorme en petite card recap de l etude

  const [tempIncrementation, tempSetIncrementation] = React.useState(incrementation);
  const [tempNomEtude, tempSetNomEtude] = React.useState(nomEtude);
  const [tempDateSignature, tempSetDateSignature] = React.useState(dateSignature);

  const handleClick = () => {
    setIncrementation(tempIncrementation);
    setNomEtude(tempNomEtude);
    setDateSignature(tempDateSignature);
    setEtudeIsCreated(!etudeIsCreated);
  }

  if (etudeIsCreated) {
    return(
      <div className="grid grid-cols-2 px-4 py-5 m-auto my-3 w-full bg-gray-100 rounded-xl border md:grid-cols-4">
        <p>Incrémentation : <span className="font-bold">{ incrementation }</span></p>
        <p>Nom de l'étude : <span className="font-bold uppercase">{ nomEtude }</span></p>
        <p>Date de signature : <span className="font-bold">{ dateSignature }</span></p>
        <div className="text-right">
          <button className="text-right text-blue-800" onClick={handleClick}>
            Modifier
          </button>
        </div>
      </div>
    );
  }
  return(
    <div className="m-auto w-full bg-gray-100 rounded-3xl border lg:w-1/2">
      <FormLayout>
        <p className="col-span-6 text-4xl font-bold">Nouvelle étude</p>
        <div className="col-span-6">
          <FormInput
            label="Incrémentation"
            placeholder={"22_98_32_EXAMPLE"}
            value={incrementation}
            setValue={tempSetIncrementation}
          />
        </div>

        <div className="col-span-6">
          <FormInput
            label="Nom de l'étude"
            placeholder={"Hopital Foch, NO_SPOON, Grenet..."}
            additional={"Pour t'aider à retrouver l'étude sur la plateforme"}
            value={nomEtude}
            setValue={tempSetNomEtude}
          />
        </div>

        <div className="col-span-6">
          <FormInput
            label="Date de signature de l'étude"
            type="date"
            value={dateSignature}
            setValue={tempSetDateSignature}
          />
        </div>

        <div className="col-span-6 m-auto text-center">
            <button 
              className={"flex items-center px-5 py-3 text-white bg-blue-800 rounded-xl shadow-xl"}
              onClick={handleClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
      </FormLayout>
    </div>
  );
}