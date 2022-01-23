import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/" passHref>
      <button 
        className="text-5xl font-bold text-blue-900 uppercase">
          Skema Conseil
        </button>
    </Link>
  )
}