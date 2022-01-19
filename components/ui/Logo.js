import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/">
      <button 
        className="text-3xl font-bold text-blue-900 uppercase">
          Skema Conseil
        </button>
    </Link>
  )
}