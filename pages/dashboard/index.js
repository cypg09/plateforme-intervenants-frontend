import React from "react";

import EtudesOuIntervenantsBanner from "../../components/common/EtudesOuIntervenantsBanner";
import BanniereProposerEtude from "../../components/rh/dashboard/BanniereProposerEtude";
import RhEtudeCardsGrid from "../../components/rh/dashboard/RhEtudeCardsGrid";
import RhIntervenantsGrid from "../../components/rh/dashboard/RhIntervenantsGrid";

export default function Dashboard() {
  const [showEtudes, setShowEtudes] = React.useState(true);
  return(
    <>
    {/* is RH */}
      <BanniereProposerEtude/>
      <EtudesOuIntervenantsBanner
        showEtudes={showEtudes}
        setShowEtudes={setShowEtudes}
      />

      { showEtudes &&
      <RhEtudeCardsGrid />
      }
      
      { !showEtudes &&
      <RhIntervenantsGrid/>
      }

    {/* else is intervenant */}
    {/*<IntervenantDashboard/>*/}
    </>
  );
}
