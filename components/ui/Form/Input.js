export default function Input({ placeholder, type }) {
  if (type === undefined) {
    type = "text";
  }
  return(
    <input 
      className="px-3 py-2 w-3/4 text-black bg-white rounded" 
      placeholder={placeholder}
      type={type}
      required
    />
  );
}