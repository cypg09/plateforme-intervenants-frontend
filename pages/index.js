import Button from "../components/ui/Button"
import H1 from "../components/ui/H1"

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="container p-9 mx-auto mt-32 w-3/4 bg-indigo-100 lg:w-1/2">
        <H1 
          text={"Deviens intervenant pour Skema Conseil !"}
        />
      </div>
      <div>
        <Button 
          text="Découvre Skema Conseil"
          type="secondary"
          href="https://groupeskemaconseil.com"
          external={true}
          />
      </div>
    </div>
  );
}
