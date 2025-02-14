import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../../assets/banner.json";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const phoneNumber = "+8801996774893";
  const message = "Hello, I'm interested in your work!";
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="h-screen md:h-[83vh]">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="-mt-[45px] md:mt-0 mr-auto place-self-center lg:col-span-6">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight py-5">
              Visualize Your Brand with Professional Design Solutions
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
              We break down complex user experinece problems to create
              integritiy focussed solutions that connect billions of people
            </p>
            <div className="mt-6 md:mt-12 flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="border-[2px] border-[#b29361] px-8 py-3 hover:bg-[#b29361] font-semibold rounded-full text-[#b29361] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Contact With Us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="https://www.facebook.com/helloarif0?mibextid=ZbWKwL"
                  target="_blank"
                  className="border-[2px] border-[#b29361] w-12 h-12 group  flex justify-center items-center hover:bg-[#b29361] font-semibold transition-all duration-300 rounded-full"
                >
                  <i className="fa fa-solid fa-facebook text-[#b29361] group-hover:text-white text-lg"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/helloarif"
                  target="_blank"
                  className="border-[2px] border-[#b29361] w-12 h-12 group  flex justify-center items-center hover:bg-[#b29361] font-semibold transition-all duration-300 rounded-full"
                >
                  <i className="fa fa-solid fa-linkedin text-[#b29361] group-hover:text-white text-lg"></i>
                </Link>
                <Link
                  to="/"
                  onClick={handleClick}
                  className="border-[2px] border-[#b29361] w-12 h-12 group flex justify-center items-center hover:bg-[#b29361] font-semibold transition-all duration-300 rounded-full"
                >
                  <i className="fa-brands fa-whatsapp text-[#b29361] group-hover:text-white text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex">
            <img
              src="hero-banner02.png"
              alt="mockup"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
