import BackToDashboardBanner from '../../common/BackToDashboardBanner';
import CardEtude from './CardEtude';

export default function Etude({ eid }) {
  return(
    <>
      <BackToDashboardBanner/>
      <CardEtude 
        eid={eid}
      />
    </>
  );
}