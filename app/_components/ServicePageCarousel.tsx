"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import rectangle from "@/app/images/Rectangle.svg";
import tiktik from "@/app/images/Titik.svg";
import Image from "next/image";
const ServicePageCarousel = () => {
  return (
    <div>
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 left-[32%] lg:left-[75%] h-[48px] w-[48px] text-blue-500 rounded-full border-2 border-blue-500 z-10 flex items-center justify-center cursor-pointer"
          >
            <IoArrowBackSharp />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[32%] lg:right-[12%] h-[48px] w-[48px] text-blue-500 rounded-full border-2 border-blue-500 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowForwardSharp />
          </div>
        )}
        className="w-full "
      >
        {/* page1 */}
        <div className=" w-full lg:h-[450px] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-16 relative ">
          {/* left site */}
          <div className="w-full text-start space-y-5 ">
            <h4 className="text-[16px] lg:text-[22px] text-blue-500 font-semibold ">
              Our Services
            </h4>
            <h1 className=" text-[22px] lg:text-[40px] font-bold leading-tight ">
              Ui /Ux , Web Design
            </h1>
            <p className="text-[#0E0E2C]/60 text-[18px] lg:text-[22px] ">
              With a team of the best Digital Product Designer In the world at
              your hand , their goal is to create usefull andeasy to use
              products for you potentials users
            </p>
          </div>
          {/* right site */}
          <div className=" w-full h-[440px] lg:h-[450px] relative flex justify-center z-10 lg:mt-12 lg:ml-16 ">
            <div className="w-[350px] ">
              <Image src={rectangle} alt="rectangle" />
            </div>
          </div>
          <div className="absolute hidden lg:top-0 lg:right-0 lg:flex ">
            <Image src={tiktik} alt="tiktik" />
          </div>
        </div>

        {/* page2 */}
        <div className=" w-full h-[450px] flex flex-col lg:flex-row justify-between items-center gap-16 relative ">
          {/* left site */}
          <div className="w-full text-start space-y-5 ">
            <h4 className="text-[22px] text-blue-500 font-semibold ">
              Our Services
            </h4>
            <h1 className="text-[40px] font-bold leading-tight ">
              Ui /Ux , Web Design
            </h1>
            <p className="text-[#0E0E2C]/60 text-[22px] ">
              With a team of the best Digital Product Designer In the world at
              your hand , their goal is to create usefull andeasy to use
              products for you potentials users
            </p>
          </div>
          {/* right site */}
          <div className="w-full relative flex justify-center z-10 -mt-12 ml-16 ">
            <div className="w-[350px] ">
              <Image src={rectangle} alt="rectangle" />
            </div>
          </div>
          <div className="absolute hidden lg:top-0 lg:right-0 lg:flex  ">
            <Image src={tiktik} alt="tiktik" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ServicePageCarousel;
