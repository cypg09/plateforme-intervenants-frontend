import FormInput from "../../components/common/FormInput";
import FormSelect from "../../components/common/FormSelect";

export default function InscriptionForm() {
  return(
    <div className="grid grid-cols-3 p-9 m-3 bg-gray-100 rounded-3xl lg:grid-cols-6">
      <div className="col-span-3">
        <FormInput
          label="Prénom"
          placeholder="Entre ton prénom..."
        />
      </div>
      <div className="col-span-3">
        <FormInput 
          label="Nom"
          placeholder="Entre ton nom..."
        />
      </div>
      <div className="col-span-4 lg:col-start-2">
        <FormInput 
          label="Adresse mail SKEMA"
          placeholder="Entre ton email SKEMA..."
          type="email"
        />
      </div>
      <div className="col-span-4 lg:col-start-2">
        <FormInput 
          label="Mot de passe"
          placeholder="Entre ton mot de passe..."
          type="email"
        />
      </div>
     <div className="col-span-3">
        <FormSelect
          label="Campus"
          placeholder="Paris"
        />
      </div>
      <div className="col-span-3">
        <FormSelect
          label="Promo"
          placeholder="L3"
        />
      </div>

    </div>
  );
}