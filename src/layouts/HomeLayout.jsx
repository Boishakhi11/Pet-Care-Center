import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="bg-base-300">
        <Header></Header>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
