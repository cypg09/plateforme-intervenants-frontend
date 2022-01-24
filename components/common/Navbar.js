import Logo from "../ui/Logo";
import Button from "../ui/Button";
import LogoSkemaConseil from "../../public/logo-skema.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="grid sticky top-0 grid-cols-2 items-center px-5 py-0 text-center bg-blue-50 bg-opacity-95 lg:grid-cols-3">
      <div className="w-16 text-left">
        <Link href="/" passHref>
          <button>
            <Image src={LogoSkemaConseil} layout="intrinsic" />
          </button>
        </Link>
      </div>
      <div className="hidden lg:inline">
        <Logo />
      </div>
      <div className="inline text-right">
        <Button
          text="Inscription"
          btnStyle="secondary"
          href="inscription"
        />
        <Button
          text="Connexion"
          btnStyle="primary"
          href="connexion"
        />
      </div>
    </div>
  )
}