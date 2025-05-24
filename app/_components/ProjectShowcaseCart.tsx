import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ShowcaseItem {
    caterogy: string;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
}

const ProjectShowcaseCart = ({ item }: { item: ShowcaseItem }) => {
    const { caterogy, title, description, image, link } = item;
  return (
    <div
      className=" w-full flex flex-col lg:flex-row justify-between items-center "
    >
      {/* left site */}
      <div className="lg:w-[540px] space-y-4">
        <h3 className="text-[22px] font-bold text-blue-500 leading-tight">
          {caterogy}
        </h3>
        <h1 className="text-[40px] text-black font-bold leading-tight">
          {title}
        </h1>
        <p className="text-[22px] text-[#0E0E2C]/60 ">{description} </p>
        <Link href={link}>
          <button className="flex items-center gap-3 text-sm text-blue-500 px-5 py-3 border-2 border-blue-500 rounded font-semibold mt-5 ">
            Check the project
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </button>
        </Link>
      </div>
      {/* right site */}
      <div className="lg:w-[540px]  ">
        <Image src={image} alt="image1" className="w-[540px] " />
      </div>
    </div>
  );
};

export default ProjectShowcaseCart;
