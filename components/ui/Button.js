import Link from "next/link";

export default function Button({ text, style, href, external = false }) {
  let defaultClassName = "px-5 text-lg m-1 py-2 text-white rounded-2xl" + " ";
  let primary = defaultClassName + "bg-blue-700";
  let secondary = defaultClassName + "bg-blue-900";
  let buttonClassName = style == "primary" ? primary : secondary;
  if (external) {
    return (
      <a href={href} className={buttonClassName} target={"_blank"}>{text}</a>
    );
  }
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