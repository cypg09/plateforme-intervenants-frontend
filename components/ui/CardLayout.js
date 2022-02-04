export default function CardLayout({ children }) {
  return(
    <div className="col-span-1 px-9 py-5 bg-white rounded-3xl">
      <div className="grid grid-cols-2">
        {children}
      </div>
    </div>
  );
}
