import React from "react";
import { Link } from "react-router";

const ServiceDemo = ({ data }) => {
  return (
    <div className="mt-20 space-y-3">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Popular Winter Care <span className="text-primary">Services</span>
      </h1>
      <p className="text-center">What we can do for you</p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {data.map((service) => (
          <div className="bg-base-100 border border-base-300 flex flex-col items-center gap-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 p-4">
            {/* image */}
            <figure className="h-32 w-32 rounded-full overflow-hidden object-cover object-top">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </figure>

            {/* content */}
            <div className="space-y-2 text-center">
              <h2 className="font-semibold text-base text-base-content">
                {service.serviceName}
              </h2>
              <div className="badge badge-primary badge-outline text-sm">
                {service.category}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-yellow-400">⭐ {service.rating}</span>
                <span className="font-semibold text-primary">
                  {service.price} Nok
                </span>
              </div>
              <Link
                to={`/services/${service.serviceId}`}
                className="btn btn-sm btn-primary text-[19px] w-full rounded-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDemo;
