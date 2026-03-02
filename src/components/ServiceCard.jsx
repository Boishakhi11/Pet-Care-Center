import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ servicedata }) => {
  return (
    <div
      data-aos="fade-right"
      className=" bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto"
    >
      {servicedata.map((service) => (
        <div className="bg-base-100 border border-base-300 shadow-xl rounded-lg overflow-hidden m-4 hover:shadow-xl transition-shadow duration-300 hover:scale-105">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold mb-2">
              {service.serviceName}
            </h2>
            <div className="flex justify-between gap-4">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Rating:</span>{" "}
                {"⭐".repeat(service.rating)}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Price:</span> {service.price} nok
              </p>
            </div>
            <Link
              to={`/services/${service.serviceId}`}
              onClick={() => window.scrollTo(0, 0)}
              className="text-[18px] btn btn-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
