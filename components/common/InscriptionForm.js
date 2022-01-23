import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";
import FormLayout from "../ui/Form/FormLayout";
import Submit from "../ui/Form/Submit";


export default function InscriptionForm() {
  return(
    <div className="m-auto w-full lg:w-1/2">
      <FormLayout>
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
      <div className="col-span-6 md:col-span-3 lg:text-right">
          <FormSelect
            label="Campus"
            placeholder="Paris"
            optionsValues={["Paris", "Lille", "Nice", "Belo", "Raleigh"]}
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:text-left">
          <FormSelect
            label="Promo"
            placeholder="L3"
            optionsValues={["L3", "M1", "M2"]}
          />
        </div>
        <div className="col-span-4 col-start-2 mt-8 md:col-start-3 md:col-span-2">
          <Submit 
            defaultText={"Je m'inscris"}
            loadingText={"Chargement..."}
          />
        </div>
      </FormLayout>
    </div>
  );
  }