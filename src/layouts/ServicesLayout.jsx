import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router";
import ServiceCard from "../components/ServiceCard";
import Search from "../components/Search";
import BookAppointmnet from "../components/BookAppointmnet";

const ServicesLayout = () => {
  const servicedata = useLoaderData();

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow w-11/12 mx-auto bg-base-200">
        <section>
          <Search></Search>
        </section>

        <section>
          <ServiceCard
            key={servicedata.id}
            servicedata={servicedata}
          ></ServiceCard>
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
