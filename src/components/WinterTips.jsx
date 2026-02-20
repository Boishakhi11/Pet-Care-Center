import React from "react";
import { FaBed, FaTint, FaSnowflake, FaPaw, FaBrush } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";

const WinterTips = ({ data }) => {
  const iconMap = {
    paw: FaPaw,
    bed: FaBed,
    brush: FaBrush,
    water: FaTint,
    coat: RiShirtFill,
    snow: FaSnowflake,
  };
  return (
    <div className="mt-20 space-y-3">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Winter Care Tips for Pets
      </h1>
      <p className="text-center mb-20">We love pets like you do :)</p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((tip) => {
          const Icon = iconMap[tip.icon];
          return (
            <div
              key={tip.id}
              className="bg-base-100 border border-base-300 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary text-4xl mb-3">
                <Icon />
              </div>
              <h2 className="font-semibold text-lg mb-2">{tip.title}</h2>
              <p className="text-sm text-base-content">{tip.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WinterTips;
