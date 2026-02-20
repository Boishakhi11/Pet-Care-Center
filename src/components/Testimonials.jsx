import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ data }) => {
  return (
    <section className="py-12 mt-20">
      {/* title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8">
        Reviews From Our <span className="text-primary">Customers</span>
      </h1>

      <Marquee speed={20} pauseOnHover>
        {/* flex row container */}
        <div className="flex gap-4 px-4 mt-10">
          {data.map((review) => (
            <div
              key={review.id}
              className="bg-base-100 border border-base-300 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 w-[280px] flex-shrink-0"
            >
              {/* responsive layout */}
              <div className="flex flex-col items-center gap-3">
                {/* avatar */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />

                {/* content */}
                <div className="text-center">
                  <h2 className="font-semibold text-base-content">
                    {review.name}
                  </h2>

                  <p className="text-xs opacity-60 mb-1">{review.date}</p>

                  {/* rating */}
                  <div className="text-yellow-400 text-sm mb-1">
                    {"⭐".repeat(review.rating)}
                  </div>

                  {/* comment */}
                  <p className="text-sm text-base-content/80 leading-relaxed">
                    “{review.comment}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
