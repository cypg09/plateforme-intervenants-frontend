import H1 from "../components/ui/H1";
import ConnexionForm from "../components/common/ConnexionForm";

export default function Connexion() {
  return(
    <>
      <div className="my-12">
        <H1 text="Connexion"/>
      </div>
      <ConnexionForm />
    </>
  );
}