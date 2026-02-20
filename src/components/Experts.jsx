import React from "react";

const Experts = ({ data }) => {
  return (
    <div className="mt-20 mb-5 space-y-3">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Meet Our <span className="text-primary"> Expert</span> Vets
      </h1>
      <p className="text-center mb-20">
        Caring hands and experienced hearts behind your pet's health
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {data.map((vet) => (
          <div className="card bg-base-100 border border-base-300 shadow-xl h-[520px] hover:scale-105">
            <figure>
              <img
                className="h-full w-full object-cover object-top"
                src={vet.image}
                alt="vet"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title">{vet.name}</h1>
              <h2 className="card-title">{vet.title}</h2>
              <p>{vet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
