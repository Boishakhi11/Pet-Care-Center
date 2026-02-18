import hero1 from "../assets/carousel2.jpg";
import hero2 from "../assets/Carousel.jpg";
import hero3 from "../assets/Carousel4.jpg";
import hero from "../assets/dog_bath.jpg";
import Snowfall from "react-snowfall";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 w-full h-full">
        {/* Slide 1 */}
        <div className="absolute inset-0">
          <Snowfall
            snowflakeCount={150}
            speed={[0.5, 0.7]}
            radius={[0.5, 3]}
            wind={[-0.5, 0.5]}
            className="absolute inset-0 z-10 pointer-events-none"
          />
          <img
            src={hero1}
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Slide 2 */}
        <div className="absolute inset-0">
          <Snowfall
            snowflakeCount={150}
            className="absolute inset-0 z-10 pointer-events-none"
          />
          <img
            src={hero}
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Slide 3 */}
        <div className="absolute inset-0">
          <Snowfall
            snowflakeCount={150}
            className="absolute inset-0 z-10 pointer-events-none"
          />
          <img
            src={hero2}
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Slide 4 */}
        <div className="absolute inset-0">
          <Snowfall
            snowflakeCount={150}
            className="absolute inset-0 z-10 pointer-events-none"
          />
          <img
            src={hero3}
            className="w-full h-full object-cover brightness-75"
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to Our Winter Wonderland
        </h1>
        <p className="text-lg lg:text-2xl mb-6">
          Experience the magic of snowfall and cozy moments.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
