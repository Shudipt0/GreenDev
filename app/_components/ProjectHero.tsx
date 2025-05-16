import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import project1image from  "@/app/images/project1.svg";
import project2image from  "@/app/images/project2.svg";
import project3image from  "@/app/images/project3.svg";
import project4image from  "@/app/images/project4.svg";
import project5image from  "@/app/images/project5.svg";
import Link from "next/link";

const ProjectHero = () => {
  return (
    <section className="py-6 lg:pb-14 lg:pt-4">
      <div className="w-full lg:w-[540px] space-y-4 lg:space-y-8" > 
        <h4 className="text-[22px] font-semibold text-blue-500 ">
        The work we realised
      </h4>
      <h1 className="text-[34px] font-bold leading-tight ">
        The work we did that made our Client happy and satisfied
      </h1>
      </div>
      {/* cards */}
      <div className="w-full flex flex-col items-center justify-center py-20 space-y-8 lg:space-y-16">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-3 justify-center items-center" >
        <div className="  col-span-1">
            <Image src={project1image} alt="project1image"  />
            <div className=" mt-2 lg:mt-3 ">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 ">UI/UX</h4>
                <p className="text-[12px] lg:text-sm text-gray-500 ">Delex Relay</p>
            </div>
        </div>
        <div className=" col-span-1">
            <Image src={project2image} alt="project2image" />
            <div className="mt-2 lg:mt-4">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 ">Web/App Development</h4>
                <p className="text-[12px] lg:text-sm text-gray-500 ">Cooke me</p>
            </div>
        </div>
        <div className=" col-span-1 row-span-2">
            <Image src={project3image} alt="project3image" className="w-full h-[294px] lg:h-full " />
            <div className="mt-2 lg:mt-4">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 ">UI/UX Design</h4>
                <p className="text-[12px] lg:text-sm text-gray-500 ">ADOC</p>
            </div>
        </div>
        <div className=" col-span-1">
            <Image src={project4image} alt="project4image" />
            <div className="mt-2 lg:mt-4">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 ">Web Development</h4>
                <p className="text-[12px] lg:text-sm text-gray-500 ">Booking.com</p>
            </div>
        </div>
        <div className=" col-span-1">
            <Image src={project5image} alt="project5image" />
            <div className="mt-2 lg:mt-4">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 ">Web Design</h4>
                <p className="text-[12px] lg:text-sm text-gray-500 ">Homely</p>
            </div>
        </div>
      </div>
      <Link href="/services" ><button className="flex items-center gap-3 text-sm text-blue-500 px-5 py-3 border-2 border-blue-500 rounded font-semibold ">Explore More Projects <span>
          <IoIosArrowForward size={20} />
        </span> </button></Link>
      </div>
    
    </section>
  );
};

export default ProjectHero;
