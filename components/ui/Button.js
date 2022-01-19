import Link from "next/link";

export default function Button({ text, style, href }) {
  let defaultClassName = "px-5 text-lg mx-1 py-2 text-white rounded-2xl" + " ";
  let primary = defaultClassName + "bg-blue-700";
  let secondary = defaultClassName + "bg-blue-900";
  let buttonClassName = style == "primary" ? primary : secondary;
  return (
    <>
      <Link 
        href={href}
      >
        <button className={buttonClassName}>
          {text}
        </button>
      </Link>
    </>
  );
}