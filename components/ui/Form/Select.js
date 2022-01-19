export default function Select({ placeholder, optionsValues }) {
  let values = [];
  optionsValues.forEach(optionValue => {
      values.push(
        <option>
          {optionValue}
        </option>)
      });
  return(
    <select placeholder={placeholder} className="px-9 py-2 text-center text-black bg-white rounded-lg">
      {values}
    </select>
  );
}
