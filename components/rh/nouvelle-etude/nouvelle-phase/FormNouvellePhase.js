import React from "react"
import FormInput from "../../../common/Form/FormInput";
import FormSelect from "../../../common/Form/FormSelect";
import FormLayout from "../../../ui/Form/FormLayout";
import Label from "../../../ui/Form/Label";

export default function FormNouvellePhase({ addNewPhase }) {
  const [typeDePhase, setTypeDePhase] = React.useState();
  const [remuneration, setRemuneration] = React.useState();
  const [dateDeDebut, setDateDeDebut] = React.useState();
  const [description, setDescription] = React.useState();

  const handleSubmit = () => {
    addNewPhase(
      typeDePhase,
      remuneration,
      dateDeDebut,
      description
    );
  }

  return(
    <div className="m-auto w-full bg-gray-100 rounded-3xl border lg:w-1/2">
      <FormLayout>
        <p className="col-span-6 text-4xl font-bold">Nouvelle phase</p>
        <div className="col-span-6">
          <FormSelect 
            label="Type de phase"
            optionsValues={["Documentaire", "Business Plan"]}
          />
        </div>
        <div className="col-span-6">
          <FormInput
            label="Rémunération"
            placeholder={"250"}
            value={remuneration}
            setValue={setRemuneration}
            additional={"En euros"}
          />
        </div>

        <div className="col-span-6">
          <Label label="Description de l'étude"/>
          <textarea 
            className="px-3 py-2 w-5/6 text-black bg-white rounded resize-y"
            placeholder={"Entre une description complète de l'étude: livrables attendus, ..."}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="col-span-6">
          <FormInput
            label="Date de début de la phase"
            type="date"
            value={dateDeDebut}
            setValue={setDateDeDebut}
          />
        </div>

        <div className="col-span-6">
          <button
            className="px-5 py-2 m-1 text-lg text-white bg-blue-900 rounded-2xl"
            onClick={handleSubmit}
          >
            Rajouter la phase
          </button>
        </div>

      </FormLayout>
    </div>
  )
}