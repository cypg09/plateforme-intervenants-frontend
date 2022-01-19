import H1 from "../../components/ui/H1";
import InscriptionForm from "./InscriptionForm";

export default function Inscription() {
  return(
    <>
      <div className="my-12">
        <H1 text="Inscription"/>
      </div>
      <InscriptionForm />
    </>
  );
}