import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <PageHeader title="About" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="hero-banner02.png"
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-5xl text-white font-bold">
                Hello, <span className="text-white">BdClipping</span>
              </h1>
              <p className="text-gray-400 mt-3 md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis obcaecati iste amet fuga at expedita debitis? Minus,
                modi? Omnis, quas nesciunt in esse pariatur libero id sunt
                laborum culpa voluptatem saepe ex illo eaque dolor optio facere
                adipisci vero. Maxime.
              </p>
              <p className="text-gray-400 mt-3 md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis obcaecati iste amet fuga at expedita debitis? Minus,
                modi? Omnis, quas nesciunt in esse pariatur libero id sunt
                laborum culpa voluptatem saepe ex illo eaque dolor optio facere
                adipisci vero. Maxime.
              </p>
              <button className="mt-8 border-[2px] border-[#b29361] px-8 py-4 hover:bg-[#b29361] font-semibold rounded-full text-[#b29361] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
