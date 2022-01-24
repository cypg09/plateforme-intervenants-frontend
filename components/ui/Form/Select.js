export default function Select({ placeholder, optionsValues, defaultValue, setValue }) {
  let values = [<option disabled selected>{ defaultValue }</option>];
  optionsValues.forEach(optionValue => {
      values.push(
        <option>
          {optionValue}
        </option>)
      });
  return(
    <select 
      placeholder={placeholder} 
      className="px-9 py-2 text-center text-black bg-white rounded-lg"
      onChange={e => setValue(e.target.value)}
    >
      {values}
    </select>
  );
}
