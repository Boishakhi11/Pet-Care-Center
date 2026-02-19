import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Services = () => {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow"></main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Services;
