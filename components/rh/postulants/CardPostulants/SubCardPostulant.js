export default function SubCardPostulant({ id, prenom, nom, email, phone, promo, campus, nombreEtudesRealisees, isPremium }){
  const cardBgColor = isPremium ? "bg-gray-100" : "bg-gray-100";

  const SubLayout = ({ children }) => {
      return (<div className={`grid grid-cols-6 p-4 rounded-2xl ${cardBgColor}`}>
        { children }
      </div>)
  };

  return(
    <>
      <SubLayout>
        <div className="col-span-3 font-bold text-left">
          <p>{ promo }</p>
          <p>{ campus }</p>
        </div>
        <div/>
        <p className="col-span-2 text-right">
          <span className="text-xl font-bold">{ nombreEtudesRealisees }</span>
          <p className="text-xs">{" "}missions réalisées pour Skema Conseil</p>
        </p>
        <div className="col-span-6">
          <p className="text-4xl font-bold text-blue-800">{ prenom } { nom }</p>
          <p type="email" className="underline">{ email }</p>
          <p>{ phone }</p>
        </div>
      </SubLayout>
    </>
  );
}