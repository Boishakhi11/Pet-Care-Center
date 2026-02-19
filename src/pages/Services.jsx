import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const servicedata = useLoaderData();
  const { id } = useParams();

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow">
        <ServiceCard
          key={servicedata.id}
          servicedata={servicedata}
        ></ServiceCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Services;
