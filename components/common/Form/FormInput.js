import Input from "../../ui/Form/Input";
import Label from "../../ui/Form/Label";

export default function FormInput({ label, placeholder, type, value, setValue, additional, additionalClassName }) {
  return(
    <div className="m-1 space-y-1 lg:m-5">
      <Label label={label} />
      <Input placeholder={placeholder} additionalClassName={additionalClassName} type={type} value={value} setValue={setValue}/>
      <p className="mx-12 italic text-gray-600 w-100">
        { additional }
      </p>
    </div>
  );
}
