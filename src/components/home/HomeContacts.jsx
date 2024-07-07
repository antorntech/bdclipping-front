import React from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../contactform/ContactForm";

const HomeContacts = () => {
  return (
    <>
      <section
        className="py-6 md:py-[50px] lg:py-[100px]"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-2 border-gray-600 p-5 bg-[#021309b2] md:bg-[#19302280] rounded-md">
              <div>
                <h1 className="text-white text-2xl md:text-5xl font-bold pb-2">
                  Let’s work together!
                </h1>
                <p className="text-white w-full mb-5">
                  I design and code beautifully simple things and i love what i
                  do. Just simple like that!
                </p>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
            <div className="mx-auto flex flex-col justify-center items-start gap-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#19643b] to-[#3ab54a] p-5 rounded-full">
                  <i className="fa-solid fa-phone text-white text-2xl"></i>
                </div>
                <div className="text-white">
                  <p>Phone</p>
                  <h2 className="text-xl font-semibold">+880179-944-6655</h2>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#19643b] to-[#3ab54a] p-5 rounded-full">
                  <i className="fa-regular fa-envelope text-white text-2xl"></i>
                </div>
                <div className="text-white">
                  <p>Email</p>
                  <h2 className="text-xl font-semibold">
                    bdclipping@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#19643b] to-[#3ab54a] p-5 rounded-full">
                  <i className="fa-solid fa-location-dot text-white text-2xl"></i>
                </div>
                <div className="text-white">
                  <p>Address</p>
                  <h2 className="text-xl font-semibold">
                    151/7, 151/7, Good Luck Center (7th & 8th) Floor, <br />{" "}
                    Green Road, Dhaka - 1205, Bangladesh
                  </h2>
                </div>
              </div>
              <div className="w-full mx-auto rounded-xl border-2 border-[#183c4b]  p-5">
                <div className="text-center md:text-start mb-8">
                  <h1 className="text-white text-2xl md:text-6xl font-bold">
                    Let's Connect
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <Link to="https://www.behance.net/bdclipping" target="_blank">
                    <div className="w-[300px] md:w-[200px] border-2 border-[#183c4b] rounded-md hover:bg-[#183c4b] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-white">
                      <i className="fa-brands fa-behance text-2xl text-[#4AF3E3]"></i>
                      <span className="text-2xl">Behance</span>
                    </div>
                  </Link>
                  <Link to="https://dribbble.com/bdclipping" target="_blank">
                    <div className="w-[300px] md:w-[200px] border-2 border-[#183c4b] rounded-md hover:bg-[#183c4b] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-white">
                      <i className="fa-solid fa-basketball text-2xl text-[#ff00dd]"></i>
                      <span className="text-2xl">Dribble</span>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 mt-4">
                  <Link
                    to="https://www.linkedin.com/in/bdclipping"
                    target="_blank"
                  >
                    <div className="w-[300px] md:w-[200px] border-2 border-[#183c4b] rounded-md hover:bg-[#183c4b] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-white">
                      <i className="fa-brands fa-linkedin text-2xl text-[#4ac9fc]"></i>
                      <span className="text-2xl">Linkedin</span>
                    </div>
                  </Link>
                  <Link
                    to="https://www.instagram.com/bdclipping"
                    target="_blank"
                  >
                    <div className="w-[300px] md:w-[200px] border-2 border-[#183c4b] rounded-md hover:bg-[#183c4b] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-white">
                      <img src="instagram.png" alt="insatagram.png" />
                      <span className="text-2xl">Instagram</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContacts;
