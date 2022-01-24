export default function FormLayout({ children }) {
  return (
    <form className="grid grid-cols-6 p-9 m-3 rounded-3xl">
      {children}
    </form>
  );
}