import React from "react";
import FormNouvelleEtude from "../../../components/rh/nouvelle-etude/FormNouvelleEtude";
import BackToDashboardBanner from "../../../components/common/BackToDashboardBanner";
import ButtonNouvellePhase from "../../../components/rh/nouvelle-etude/nouvelle-phase/ButtonNouvellePhase";
import FormNouvellePhase from "../../../components/rh/nouvelle-etude/nouvelle-phase/FormNouvellePhase";
import GridPhases from "../../../components/rh/nouvelle-etude/GridPhases";
import ButtonValiderEtude from "../../../components/rh/nouvelle-etude/ButtonValiderEtude";

export default function NouvelleEtude() {
  const [incrementation, setIncrementation] = React.useState();
  const [nomEtude, setNomEtude] = React.useState();
  const [dateSignature, setDateSignature] = React.useState();
  const [etudeIsCreated, setEtudeIsCreated] = React.useState(false);
  const [showPhaseForm, setShowPhaseForm] = React.useState(false);

  const [phases, setPhases] = React.useState([]);

  const addNewPhase = (inputTypeDePhase, inputRemuneration, inputDateDeDebut, inputDateDeFin, inputCampus, inputDescription) => {
    setPhases([...phases, 
      {
        typeDePhase: inputTypeDePhase,
        remuneration: inputRemuneration,
        dateDeDebut: inputDateDeDebut,
        dateDeFin: inputDateDeFin,
        campus: inputCampus,
        description: inputDescription,
      }
    ]);
  }

  const toggleShowPhaseForm = () => setShowPhaseForm(!showPhaseForm);

  let DefaultComponent = ({ children }) => {
    return(<>
      <BackToDashboardBanner/>
      <div>
        <h1 className="text-4xl font-bold">L'étude</h1>
        <FormNouvelleEtude 
          etudeIsCreated={etudeIsCreated}
          setEtudeIsCreated={setEtudeIsCreated}
          incrementation={incrementation}
          setIncrementation={setIncrementation}
          nomEtude={nomEtude}
          setNomEtude={setNomEtude}
          dateSignature={dateSignature}
          setDateSignature={setDateSignature}
        />
        { children }
      </div>
    </>);
  }

  return(
    <DefaultComponent>
      { etudeIsCreated && 
      <>
        { phases.length > 0 && 
        <GridPhases 
          phases={phases}
          setPhases={setPhases}
        />
        }

        <div className="mt-12 mb-3 space-x-5">
          <ButtonNouvellePhase 
            onClick={toggleShowPhaseForm}
          />
          <ButtonValiderEtude
            onClick={toggleShowPhaseForm}
          />
        </div>
        <div className="my-3">
          { showPhaseForm && 
            <FormNouvellePhase
              addNewPhase={addNewPhase}
              toggleShowPhaseForm={toggleShowPhaseForm}
            />
          }
        </div>

      </>
      }
    </DefaultComponent>
  );
}