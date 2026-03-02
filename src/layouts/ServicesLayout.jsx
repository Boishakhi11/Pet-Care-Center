import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLoaderData, useParams } from "react-router";
import ServiceCard from "../components/ServiceCard";
import Search from "../components/Search";
import BookAppointmnet from "../components/BookAppointmnet";
import { useEffect } from "react";

const ServicesLayout = () => {
  const servicedata = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow w-11/12 mx-auto bg-base-200">
        <section>{!id && <Search></Search>}</section>

        <section>
          {!id && (
            <ServiceCard
              key={servicedata.id}
              servicedata={servicedata}
            ></ServiceCard>
          )}
        </section>

        <section>
          <Outlet></Outlet>
        </section>

        <section>
          <BookAppointmnet></BookAppointmnet>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ServicesLayout;
