import FormInput from "../../components/common/FormInput";
import FormSelect from "../../components/common/FormSelect";
import Submit from "../../components/ui/Form/Submit";

export default function InscriptionForm() {
  return(
    <form className="grid grid-cols-6 p-9 m-3 bg-gray-100 rounded-3xl">
      <div className="col-span-6 lg:col-span-3">
        <FormInput
          label="Prénom"
          placeholder="Entre ton prénom..."
        />
      </div>
      <div className="col-span-6 lg:col-span-3">
        <FormInput 
          label="Nom"
          placeholder="Entre ton nom..."
        />
      </div>
      <div className="col-span-6 lg:col-span-4 lg:col-start-2">
        <FormInput 
          label="Adresse mail SKEMA"
          placeholder="Entre ton email SKEMA..."
          type="email"
        />
      </div>
      <div className="col-span-6 lg:col-span-4 lg:col-start-2">
        <FormInput 
          label="Mot de passe"
          placeholder="Entre ton mot de passe..."
          type="password"
        />
      </div>
     <div className="col-span-3">
        <FormSelect
          label="Campus"
          placeholder="Paris"
          optionsValues={["Paris", "Lille", "Nice", "Belo", "Raleigh"]}
        />
      </div>
      <div className="col-span-3">
        <FormSelect
          label="Promo"
          placeholder="L3"
          optionsValues={["L3", "M1", "M2"]}
        />
      </div>
      <div className="col-span-2 col-start-3">
        <Submit 
          defaultText={"Je m'inscris"}
          loadingText={"Chargement..."}
        />
      </div>
    </form>
  );
}