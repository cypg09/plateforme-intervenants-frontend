import React from "react"
import FormInput from "../../../common/Form/FormInput";
import FormSelect from "../../../common/Form/FormSelect";
import FormLayout from "../../../ui/Form/FormLayout";
import Label from "../../../ui/Form/Label";

export default function FormNouvellePhase({ addNewPhase, toggleShowPhaseForm }) {
  const [typeDePhase, setTypeDePhase] = React.useState();
  const [remuneration, setRemuneration] = React.useState();
  const [dateDeDebut, setDateDeDebut] = React.useState();
  const [dateDeFin, setDateDeFin] = React.useState();
  const [campus, setCampus] = React.useState();
  const [description, setDescription] = React.useState();

  const handleSubmit = () => {
    addNewPhase(
      typeDePhase,
      remuneration,
      dateDeDebut,
      dateDeFin,
      campus,
      description,
    );
    toggleShowPhaseForm();
  }

  return(
    <div className="absolute inset-0 m-auto w-full h-full bg-white rounded-3xl border drop-shadow-2xl lg:inset-5 lg:h-10/12 lg:w-10/12">
      <div className="relative">
      <FormLayout>
        <p className="col-span-6 text-4xl font-bold">Nouvelle phase</p>
        <div className="col-span-6 lg:col-span-3">
          <FormSelect 
            label="Type de phase"
            optionsValues={["Documentaire", "Business Plan"]}
            defaultValue={"Choisis un type de phase"}
            setValue={setTypeDePhase}
          />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <FormInput
            label="Rémunération"
            placeholder={"250"}
            value={remuneration}
            setValue={setRemuneration}
            additional={"En euros"}
          />
        </div>

        <div className="col-span-6">
          <Label label="Description de la phase"/>
          <textarea 
            className="px-3 py-2 pb-9 text-black bg-blue-50 rounded resize-y lg:w-5/6"
            placeholder={"Entre une description complète de la phase: livrables attendus, ..."}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="col-span-6 lg:col-span-3">
          <FormInput
            label="Date de début de la phase"
            type="date"
            value={dateDeDebut}
            setValue={setDateDeDebut}
          />
        </div>

        <div className="col-span-6 lg:col-span-3">
          <FormInput
            label="Date de fin de la phase"
            type="date"
            value={dateDeFin}
            setValue={setDateDeFin}
          />
        </div>

        <div className="col-span-6 mb-12">
          <FormSelect 
            label="Campus"
            optionsValues={["Paris", "Lille", "Sophia", "Tous"]}
            defaultValue={"Campus de recrutement"}
            setValue={setCampus}
          />
        </div>

        <div className="col-span-3">
          <button
            className="px-5 py-2 m-1 text-lg text-white bg-red-800 rounded-2xl"
            onClick={toggleShowPhaseForm}
          >
            Annuler la phase
          </button>
        </div>

        <div className="col-span-3">
          <button
            className="px-5 py-2 m-1 text-lg text-white bg-blue-800 rounded-2xl"
            onClick={handleSubmit}
          >
            Rajouter la phase
          </button>
        </div>

      </FormLayout>
    </div>
    </div>
  )
}