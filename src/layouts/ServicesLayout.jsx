import React, { useState } from "react";
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

  const [selectedCategory, SetSelectedCategory] = useState("All");

  //animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  //search by category
  const filterdServices =
    selectedCategory === "All"
      ? servicedata
      : servicedata.filter((service) => service.category == selectedCategory);

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <header className="bg-base-300">
        <Navbar></Navbar>
      </header>
      <main className="grow w-11/12 mx-auto bg-base-200">
        <section>
          {!id && (
            <Search
              selectedCategory={selectedCategory}
              SetSelectedCategory={SetSelectedCategory}
            ></Search>
          )}
        </section>

        <section>
          {!id && <ServiceCard servicedata={filterdServices}></ServiceCard>}
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
