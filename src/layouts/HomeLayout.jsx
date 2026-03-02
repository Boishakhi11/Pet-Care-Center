import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experts from "../components/Experts";
import { useLoaderData, useNavigation } from "react-router";
import Testimonials from "../components/Testimonials";
import ServiceDemo from "../components/ServiceDemo";
import WinterTips from "../components/WinterTips";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const data = useLoaderData();
  const { state } = useNavigation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  //console.log(data);
  return (
    <div className="bg-base-200">
      <header className="bg-base-300">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <section data-aos="fade-up">
          {state == "loading" ? (
            <Loading> </Loading>
          ) : (
            <ServiceDemo
              key={data.services.serviceId}
              data={data.services}
            ></ServiceDemo>
          )}
        </section>
        <section>
          <Experts data={data.vets}></Experts>
        </section>
        <section data-aos="fade-up">
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
