import IntervenantDashboard from "./intervenant";
import BanniereProposerEtude from "../../components/rh/dashboard/BanniereProposerEtude";
import RhEtudeCardsGrid from "../../components/rh/dashboard/RhEtudeCardsGrid";

export default function Dashboard() {
  return(
    <>
    {/* is RH */}
      <BanniereProposerEtude/>
      <RhEtudeCardsGrid />
    {/* else is intervenant */}
      <IntervenantDashboard/>
    </>
  );
}
