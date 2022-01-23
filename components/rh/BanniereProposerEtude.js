import Button from "../ui/Button";

export default function BanniereProposerEtude() {
  return(
    <>
      <Button
        text={"Proposer une nouvelle étude"}
        btnStyle={"rh"}
        href={"/etude/rh/proposeretude"}
        />
    </>
  );
}