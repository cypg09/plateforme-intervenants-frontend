import Label from "../ui/Form/Label";
import Select from "../ui/Form/Select";

export default function FormSelect({ label, placeholder, optionsValues }) {
  return(
    <div className="m-5 space-y-1">
      <Label label={label} />
      <Select placeholder={placeholder} optionsValues={optionsValues} />
    </div>
  );
}

