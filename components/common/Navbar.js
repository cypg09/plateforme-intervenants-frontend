import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <div className="grid sticky top-0 grid-cols-3 items-center px-5 py-3 text-center bg-white bg-opacity-95">
      <div className="text-left">
        <Logo />
      </div>
      <Logo />
      <div className="text-right">
        <Button
          text="Inscription"
          style="secondary"
          href="/"
        />
        <Button
          text="Connexion"
          style="primary"
          href="/"
        />
      </div>
    </div>
  )
}