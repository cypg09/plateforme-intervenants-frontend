import Input from "../ui/Form/Input";
import Label from "../ui/Form/Label";

export default function FormInput({ label, placeholder, type }) {
  return(
    <div className="m-1 space-y-1 lg:m-5">
      <Label label={label} />
      <Input placeholder={placeholder} type={type} />
    </div>
  );
}
