import Link from "next/link";

export default function Button({ text, btnStyle, href, external = false }) {
  let defaultClassName = "px-5 text-lg m-1 py-2  rounded-2xl" + " ";
  let primary = defaultClassName + "bg-blue-700 text-white";
  let secondary = defaultClassName + "bg-blue-900 text-white";
  let transparent = defaultClassName + "bg-white  text-teal-400";

  let buttonClassName = btnStyle === "primary" ? primary : btnStyle === "secondary" ? secondary : transparent;
  if (external) {
    return (
      <a href={href} className={buttonClassName} target="_blank" rel="noreferrer">{text}</a>
    );
  }
  return (
    <>
      <Link 
        href={href}
        passHref
      >
        <button className={buttonClassName}>
          {text}
        </button>
      </Link>
    </>
  );
}