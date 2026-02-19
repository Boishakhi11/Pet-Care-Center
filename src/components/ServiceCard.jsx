import React from "react";

const ServiceCard = ({ servicedata }) => {
  console.log(servicedata);
  return (
    <div className=" bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {servicedata.map((service) => (
        <div className="bg-base-200 shadow-md rounded-lg overflow-hidden w-72 m-4 hover:shadow-xl transition-shadow duration-300">
          <img
            src={service.image}
            alt={servicedata.serviceName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              {service.serviceName}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Rating:</span> {service.rating} ⭐
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Price:</span> ${service.price}
            </p>
            <button className="btn-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
