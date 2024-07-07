import React, { useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link, useLocation } from "react-router-dom";
import CustomModal from "../components/custommodal/CustomModal";

const SingleServices = () => {
  const alllogodesigns = [
    {
      id: 2,
      title: "Logo Design 1",
      thumbnail: "/images/logodesign01.jpg",
      link: "/",
    },
    {
      id: 1,
      title: "Logo Design 2",
      thumbnail: "/images/logodesign02.jpg",
      link: "/",
    },
    {
      id: 3,
      title: "Logo Design 3",
      thumbnail: "/images/logodesign03.jpg",
      link: "/",
    },
    {
      id: 4,
      title: "Logo Design 4",
      thumbnail: "/images/logodesign04.jpg",
      link: "/",
    },
    {
      id: 5,
      title: "Logo Design 5",
      thumbnail: "/images/logodesign01.jpg",
      link: "/",
    },
    {
      id: 6,
      title: "Logo Design 6",
      thumbnail: "/images/logodesign02.jpg",
      link: "/",
    },
  ];

  const allbrandings = [
    {
      id: 1,
      title: "Branding 1",
      thumbnail: "/images/branding01.png",
      link: "/",
    },
    {
      id: 2,
      title: "Branding 2",
      thumbnail: "/images/branding02.png",
      link: "/",
    },
    {
      id: 3,
      title: "Branding 3",
      thumbnail: "/images/branding03.png",
      link: "/",
    },
    {
      id: 4,
      title: "Branding 4",
      thumbnail: "/images/branding04.png",
      link: "/",
    },
    {
      id: 5,
      title: "Branding 5",
      thumbnail: "/images/branding01.png",
      link: "/",
    },
    {
      id: 6,
      title: "Branding 6",
      thumbnail: "/images/branding02.png",
      link: "/",
    },
  ];

  const allPrintDesigns = [
    {
      id: 1,
      title: "Print Design 1",
      thumbnail: "/images/printdesign01.png",
      link: "/",
    },
    {
      id: 2,
      title: "Print Design 2",
      thumbnail: "/images/printdesign02.png",
      link: "/",
    },
    {
      id: 3,
      title: "Print Design 3",
      thumbnail: "/images/printdesign03.png",
      link: "/",
    },
    {
      id: 4,
      title: "Print Design 4",
      thumbnail: "/images/printdesign04.png",
      link: "/",
    },
    {
      id: 5,
      title: "Print Design 5",
      thumbnail: "/images/printdesign01.png",
      link: "/",
    },
    {
      id: 6,
      title: "Print Design 6",
      thumbnail: "/images/printdesign02.png",
      link: "/",
    },
  ];

  const allSocialMedia = [
    {
      id: 1,
      title: "Social Media 1",
      thumbnail: "/images/socialmedia01.png",
      link: "/",
    },
    {
      id: 2,
      title: "Social Media 2",
      thumbnail: "/images/socialmedia02.png",
      link: "/",
    },
    {
      id: 3,
      title: "Social Media 3",
      thumbnail: "/images/socialmedia03.png",
      link: "/",
    },
    {
      id: 4,
      title: "Social Media 4",
      thumbnail: "/images/socialmedia04.png",
      link: "/",
    },
    {
      id: 5,
      title: "Social Media 5",
      thumbnail: "/images/socialmedia01.png",
      link: "/",
    },
    {
      id: 6,
      title: "Social Media 6",
      thumbnail: "/images/socialmedia02.png",
      link: "/",
    },
  ];

  const allAnimations = [
    {
      id: 1,
      title: "Animation 1",
      thumbnail: "/images/animation01.png",
      link: "/",
    },
    {
      id: 2,
      title: "Animation 2",
      thumbnail: "/images/animation02.png",
      link: "/",
    },
    {
      id: 3,
      title: "Animation 3",
      thumbnail: "/images/animation03.png",
      link: "/",
    },
    {
      id: 4,
      title: "Animation 4",
      thumbnail: "/images/animation04.png",
      link: "/",
    },
    {
      id: 5,
      title: "Animation 5",
      thumbnail: "/images/animation01.png",
      link: "/",
    },
    {
      id: 6,
      title: "Animation 6",
      thumbnail: "/images/animation02.png",
      link: "/",
    },
  ];

  const all3dModeling = [
    {
      id: 1,
      title: "3dmodeling 1",
      thumbnail: "/images/3dmodeling01.png",
      link: "/",
    },
    {
      id: 2,
      title: "3dmodeling 2",
      thumbnail: "/images/3dmodeling02.png",
      link: "/",
    },
    {
      id: 3,
      title: "3dmodeling 3",
      thumbnail: "/images/3dmodeling03.png",
      link: "/",
    },
    {
      id: 4,
      title: "3dmodeling 4",
      thumbnail: "/images/3dmodeling04.png",
      link: "/",
    },
    {
      id: 5,
      title: "3dmodeling 5",
      thumbnail: "/images/3dmodeling01.png",
      link: "/",
    },
    {
      id: 6,
      title: "3dmodeling 6",
      thumbnail: "/images/3dmodeling02.png",
      link: "/",
    },
  ];

  const location = useLocation();

  // Extract the pathname from the location object
  const currentPath = location.pathname;

  // Split the pathname by '/' and get the last segment
  const extractedPath = currentPath.split("/").pop();

  // Determine which data array to use based on the extracted path
  let dataToRender = [];
  if (extractedPath === "all-logo-design") {
    dataToRender = alllogodesigns;
  } else if (extractedPath === "all-branding") {
    dataToRender = allbrandings;
  } else if (extractedPath === "all-print-design") {
    dataToRender = allPrintDesigns;
  } else if (extractedPath === "all-social-media") {
    dataToRender = allSocialMedia;
  } else if (extractedPath === "all-animation") {
    dataToRender = allAnimations;
  } else if (extractedPath === "all-3d-modeling") {
    dataToRender = all3dModeling;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <PageHeader title={extractedPath} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataToRender.length > 0 ? (
              dataToRender.map((data) => (
                <div
                  key={data.id}
                  className="w-full h-full cursor-pointer"
                  onClick={() => handleImageClick(data.thumbnail)}
                >
                  <div className="px-2">
                    <div className="w-full cursor-pointer">
                      <div className="group relative mx-3 h-72 sm:h-96 rounded-lg border-2 border-gray-600 overflow-hidden">
                        <img
                          src={data.thumbnail}
                          alt=""
                          className="w-full h-full object-cover rounded-lg group-hover:scale-125 transition-all duration-500"
                        />
                        <div className="w-full h-full bg-gradient-to-t from-[#002D3B] via-[#002d3bb0] to-transparent absolute top-0 left-0 rounded-lg hover:scale-125 transition-all duration-500"></div>
                      </div>
                    </div>
                    <div className="w-full p-3">
                      <h1 className="text-white text-2xl font-bold">
                        {data.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available for the current path.</p>
            )}
          </div>
        </div>
      </section>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default SingleServices;
