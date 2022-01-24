import Label from "../../ui/Form/Label";
import Select from "../../ui/Form/Select";

export default function FormSelect({ label, placeholder, optionsValues, defaultValue, setValue }) {
  return(
    <div className="m-1 space-y-1 lg:m-5">
      <Label label={label} />
      <Select placeholder={placeholder} optionsValues={optionsValues} defaultValue={defaultValue} setValue={setValue} />
    </div>
  );
}

