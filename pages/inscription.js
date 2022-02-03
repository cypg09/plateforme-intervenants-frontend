import H1 from "../components/ui/H1";
import InscriptionForm from "../components/common/InscriptionForm";

export default function Inscription() {
  return(
    <div className="p-2 m-auto w-full bg-white rounded-2xl border-2 border-blue-900 lg:w-1/2">
      <div className="my-8 lg:my-12">
        <H1 text="Inscription"/>
      </div>
      <InscriptionForm />
    </div>
  );
}