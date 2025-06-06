import { IoIosArrowForward } from "react-icons/io";

const ServiceCard = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-[22px] font-bold text-blue-600 leading-tight ">
        UI/UX Design,Web Design
      </h3>
      <p className="text-[16px] text-[#0E0E2C]/60 ">
        Makeing your product clean and easy to use it the important thing for us
      </p>
      <button className=" px-4 py-2 text-sm flex items-center gap-4 text-blue-500 border-2 border-blue-500 rounded">
        Lern More
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default ServiceCard;
