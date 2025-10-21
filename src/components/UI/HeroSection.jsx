import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-cols-2 gap-4 items-center">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">
            Explore the World, One Country at a Time.
          </h1>
          <p className="mb-6">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn-primary flex items-center gap-2">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="">
          <img
            src="/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;