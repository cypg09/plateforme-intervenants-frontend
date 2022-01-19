export default function Input({ placeholder, type }) {
  if (!type) {
    let type = "text";
  }
  return(
    <input 
      className="px-3 py-1 w-full text-black bg-white rounded" 
      placeholder={placeholder}
      type={type}
      required
    />
  );
}