import H1 from "../components/ui/H1";
import ConnexionForm from "../components/common/ConnexionForm";

export default function Connexion() {
  return(
    <div className="p-2 m-auto w-1/2 bg-white rounded-2xl border-2 border-blue-900">
      <div className="my-12">
        <H1 text="Connexion"/>
      </div>
      <ConnexionForm />
    </div>
  );
}