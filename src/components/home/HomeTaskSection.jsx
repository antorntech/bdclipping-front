import React from "react";
import CountUp from "react-countup";

const HomeTaskSection = () => {
  return (
    <>
      <div className="rounded-md bg-[#62a29a] w-full h-full grid max-w-screen-xl py-8 mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={5}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={50}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Project <br /> Completed
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={1}
              duration={5}
              suffix="K"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Happy <br /> Clients
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={5}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Work for <br /> Company
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTaskSection;
