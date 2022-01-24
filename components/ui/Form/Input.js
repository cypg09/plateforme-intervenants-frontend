import React from "react";


export default function Input({ placeholder, type, value, setValue =() => {} }) {
  if (type === undefined) {
    type = "text";
  }

  return(
    <input 
      className="px-3 py-2 w-3/4 text-black bg-blue-50 rounded"
      placeholder={placeholder}
      type={type}
      defaultValue={value}
      onChange={e => setValue(e.target.value)}
      required
    />
  );
}