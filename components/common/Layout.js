import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-center">
      <Navbar />
      <div className="container flex-grow p-1 m-0 mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}