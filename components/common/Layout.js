import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-center bg-blue-50">
      <Navbar />
      <div className="container flex-grow p-1 mx-auto my-8">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}