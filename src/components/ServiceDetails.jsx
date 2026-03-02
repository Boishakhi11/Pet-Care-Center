import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, useRouteLoaderData } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useRouteLoaderData("services");

  const [service, setService] = useState({});
  console.log(id, service);

  useEffect(() => {
    const serviceDetails = services.find(
      (currentService) => currentService.serviceId == id,
    );
    setService(serviceDetails);
  }, [id, services]);

  return (
    <div className="w-10/12 mx-auto mt-10">
      <img
        className="h-[350px] w-full object-contain rounded-2xl"
        src={service.image}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 mt-10 lg:mt-20">
        <div className="lg:col-span-1 space-y-3">
          <p className="text-xl"> Category : {service.category}</p>
          <hr className="text-gray-400" />
          <p className="text-xl">Company : {service.providerName}</p>
          <hr className="text-gray-400" />
          <p className="text-xl">Email :{service.providerEmail}</p>

          <hr className="text-gray-400" />
          <p className="text-xl">Available Slots : {service.slotsAvailable}</p>
          <hr className="text-gray-400" />
          <p className="text-xl">Popularity : {"⭐".repeat(service.rating)}</p>
          <hr className="text-gray-400" />
          <p className="text-xl">Price : {service.price} nok</p>
        </div>

        <div className="lg:col-span-2 space-y-4 mr-5">
          <h1 className="text-3xl md:text-4xl text-primary font-semibold text-center">
            {service.serviceName}
          </h1>
          <p className="text-xl">{service.description}</p>
          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="btn btn-primary text-xl mt-2"
          >
            {" "}
            Browse All Services{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
