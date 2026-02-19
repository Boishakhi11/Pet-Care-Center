import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experts from "../components/Experts";
import { useLoaderData, useParams } from "react-router";

const HomeLayout = () => {
  const { id } = useParams();
  const data = useLoaderData();

  console.log(data, id);
  return (
    <div className="bg-base-200">
      <header className="bg-base-300">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <section>
          <Experts key={data.id} data={data}></Experts>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
