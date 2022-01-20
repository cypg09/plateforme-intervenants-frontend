import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Image from "next/image";
import LogoSkemaConseil from "../../public/logo-skema.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid sticky top-0 grid-cols-2 items-center px-5 py-0 text-center bg-white bg-opacity-95 lg:grid-cols-3">
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
      <div className="text-right">
        <Button
          text="Inscription"
          style="secondary"
          href="inscription"
        />
        <Button
          text="Connexion"
          style="primary"
          href="connexion"
        />
      </div>
    </div>
  )
}