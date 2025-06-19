"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

import Image from "next/image";
import head1 from "@/app/images/head1.svg";
import head2 from "@/app/images/head2.svg";

const TestCarousel = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center ">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 left-[32%] lg:left-[44%] h-[48px] w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 flex items-center justify-center cursor-pointer"
          >
            <IoArrowBackSharp />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[32%] lg:right-[44%] h-[48px] w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 z-5 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowForwardSharp />
          </div>
        )}
        className="w-full "
      >
        <div className=" w-full lg:w-[800px] h-[350px] text-start p-14 ">
          <p className="text-[16px] lg:text-[22px] text-gray-400 ">
            Our team of digital product creators and Tch Bring Skilled will take
            your idea to the next level and help you with your product
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <div className="w-[68px] h-[68px] ">
              <Image src={head1} alt="head1" />
            </div>
            <div>
              <h1 className="text-[18px] font-semibold ">John Doe</h1>
              <p className="text-[16px] text-gray-400">CEO of Company</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[400px] h-[350px] text-start p-14 ">
          <p className="text-[16px] text-gray-400 ">
            Our team of digital product creators and Tch Bring Skilled will take
            your idea to the next level and help you with your product
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <div className="w-[68px] h-[68px] ">
              <Image src={head2} alt="head2" />
            </div>
            <div>
              <h1 className="text-[18px] font-semibold ">John Doe</h1>
              <p className="text-[16px] text-gray-400">CEO of Company</p>
            </div>
          </div>
        </div>

        <div className=" w-full lg:w-[400px] h-[350px] text-start p-14 ">
          <p className="text-[16px] text-gray-400 ">
            Our team of digital product creators and Tch Bring Skilled will take
            your idea to the next level and help you with your product
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <div className="w-[68px] h-[68px] ">
              <Image src={head1} alt="head1" />
            </div>
            <div>
              <h1 className="text-[18px] font-semibold ">John Doe</h1>
              <p className="text-[16px] text-gray-400">CEO of Company</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[400px] h-[350px] text-start p-14 relative">
          <p className="text-[16px] text-gray-400 ">
            Our team of digital product creators and Tch Bring Skilled will take
            your idea to the next level and help you with your product
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <div className="w-[68px] h-[68px] ">
              <Image src={head2} alt="head2" />
            </div>
            <div>
              <h1 className="text-[18px] font-semibold ">John Doe</h1>
              <p className="text-[16px] text-gray-400">CEO of Company</p>
            </div>
          </div>
        </div>
      </Carousel>
      {/* Overlay */}
      <div className="absolute w-full h-full bg-transparent z-10 "> </div>
    </div>
  );
};

export default TestCarousel;


