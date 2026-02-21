import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experts from "../components/Experts";
import { useLoaderData } from "react-router";
import Testimonials from "../components/Testimonials";
import ServiceDemo from "../components/ServiceDemo";
import WinterTips from "../components/WinterTips";

const HomeLayout = () => {
  const data = useLoaderData();

  //console.log(data);
  return (
    <div className="bg-base-200">
      <header className="bg-base-300">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <section>
          <ServiceDemo data={data.services}></ServiceDemo>
        </section>
        <section>
          <Experts data={data.vets}></Experts>
        </section>
        <section>
          <WinterTips data={data.tips}></WinterTips>
        </section>
        <section>
          <Testimonials data={data.reviews}></Testimonials>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
