import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import hero1 from "../assets/carousel2.jpg";
import hero2 from "../assets/Carousel.jpg";
import hero3 from "../assets/Carousel4.jpg";
import hero4 from "../assets/PetCover.avif";
import hero from "../assets/dog_bath.jpg";
import { Link } from "react-router";

import { IoArrowForwardOutline } from "react-icons/io5";
import Snowfall from "react-snowfall";

const slides = [hero1, hero2, hero3, hero, hero4];

const Hero2 = () => {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((bg, index) => (
          <SwiperSlide
            key={index}
            className="h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <Snowfall
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              snowflakeCount={200}
              speed={[0.5, 0.7]}
              radius={[0.5, 3]}
              wind={[-0.5, 0.5]}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/20 text-white p-4 text-center space-y-4 pl-10">
              <h1 className="text-start text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Keep Your Furry Friends Warm <br /> This Winter
              </h1>
              <Link className="btn btn-primary text-2xl">
                Explore Services <IoArrowForwardOutline />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero2;
