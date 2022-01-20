import FormCheckbox from "../../components/common/FormCheckbox";
import FormInput from "../../components/common/FormInput";
import FormLayout from "../../components/ui/Form/FormLayout";
import Submit from "../../components/ui/Form/Submit";

export default function ConnexionForm(){
  return(
    <>
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
            <label for="isRH">Je suis RH</label>
          </div>
        </div>
        <div className="col-span-4 col-start-2 mt-8 md:col-start-3 md:col-span-2">
          <Submit 
            defaultText={"Je me connecte"}
            loadingText={"Chargement..."}
          />
        </div>
      </FormLayout>
    </>
  );
}