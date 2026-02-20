import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experts from "../components/Experts";
import { useLoaderData } from "react-router";
import Testimonials from "../components/Testimonials";

const HomeLayout = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="bg-base-200">
      <header className="bg-base-300">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <section>
          <Experts key={data.vets.id} data={data.vets}></Experts>
        </section>
        <section>
          <Testimonials
            key={data.reviews.id}
            data={data.reviews}
          ></Testimonials>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
