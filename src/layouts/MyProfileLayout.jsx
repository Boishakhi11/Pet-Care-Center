import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyProfile from "../pages/MyProfile";

const MyProfileLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col gap-2">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow">
        <MyProfile></MyProfile>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyProfileLayout;
