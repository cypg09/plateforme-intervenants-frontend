import FormCheckbox from "./Form/FormCheckbox";
import FormInput from "./Form/FormInput";
import FormLayout from "../ui/Form/FormLayout";
import Submit from "../ui/Form/Submit";

export default function ConnexionForm(){
  return(
    <div className="m-auto w-full">
      <FormLayout>
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
        <div className="col-span-6 lg:col-span-4 lg:col-start-2">
          <div className="text-center">
            <FormCheckbox label={"Je suis RH"}/>
            <label htmlFor="isRH">Je suis RH</label>
          </div>
        </div>
        <div className="col-span-6 mt-8 md:col-start-2 md:col-span-4">
          <Submit 
            defaultText={"Je me connecte"}
            loadingText={"Chargement..."}
          />
        </div>
      </FormLayout>
    </div>
  );
}