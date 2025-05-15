import { IoIosArrowForward } from "react-icons/io";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-10">
        <div className="py-4">
            <h4 className="text-[22px] font-semibold text-blue-500 ">The Services We Offers</h4>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:space-y-5">
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-[34px] font-bold leading-tight">
            We offer a variaty of services to help you to grow and build your
            brand and help you with developing your Products
          </h1>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>
        <div className="cols-span-1 lg:w-60 ">
           <ServiceCard/>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
