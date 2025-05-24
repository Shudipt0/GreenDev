import image1 from "@/app/images/project1.svg";
import image2 from "@/app/images/project2.svg";
import image3 from "@/app/images/project3.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const projectDescription = {
  page: "Our Projects",
  title: "Project We Realised",
  description:
    "Our team helped alot of startup and company to realise their Products and helped thousnd of client to grow their business",
};

const numbering = [
  {title: "Happy Clients", number: "+150"},
  {title: "Project Done", number: "+450"},
  {title: "Solutions Created", number: "+10"},
  {title: "Bussiness Growed", number: "+25"},
];

const ShowcaseItem = [
{caterogy: "Web / App Development", title: "Delex Relay , a delivery platfrome",
  description: "Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too ",
  image: image1,
  link: "#",
 },
 {caterogy: "UI/UX Design", title: "Cooke Me ,Fresh food At your Home",
  description: "Cooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals  ",
  image: image2,
  link: "#",
 },
 {caterogy: "UI/UX Design", title: "ADOC,Your Online Medical Appoinments",
  description: "ADOC Is an online Medical appoinment, That allow user To take an appoinment with a doctor , it alos work as a medical files Holder",
  image: image3,
  link: "#",
 },
]
const page = () => {
  return (
    <div className="w-full container mx-auto px-6 lg:px-28 mt-32 flex flex-col items-center">
      <div className="w-[768px] flex flex-col justify-center items-center text-center space-y-8 ">
        <h4 className="text-[22px] text-blue-500 font-bold ">
          {projectDescription.page}
        </h4>
        <h1 className="text-[40px] font-bold ">{projectDescription.title}</h1>
        <p className="text-[22px] text-[#0E0E2C]/60 lg:w-[732px]">
          {projectDescription.description}
        </p>

        <div className="w-full flex justify-between pt-4">
           {numbering.map((item, index) => (
            <div key={index} className="space-y-3 text-start" >
              <h4 className="text-[16px] text-blue-600 font-semibold " >{item.title}</h4>
              <h1 className="text-4xl font-bold text-black " >{item.number}</h1>
            </div>
           ) )}
        </div>
      </div>

      {/* showcase items */}

      <div className="w-full py-32 " >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-content-between items-center ">
            {/* left site */}
             <div className="lg:w-[540px] space-y-4" >
                <h3 className="text-[22px] font-bold text-blue-500 leading-tight" >UI/UX Design</h3>
                <h1 className="text-[40px] text-black font-bold leading-tight" >Delex Relay , a delivery platfrome</h1>
                <p className="text-[22px] text-[#0E0E2C]/60 " >Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too </p>
                <Link href="/projects" ><button className="flex items-center gap-3 text-sm text-blue-500 px-5 py-3 border-2 border-blue-500 rounded font-semibold mt-5 ">Check the project <span>
          <IoIosArrowForward size={20} />
        </span> </button></Link>
             </div>
             {/* right site */}
             <div className="w-[540px]  ">
              <Image src={image1} alt="image1" className="w-[540px] " />
             </div>
          </div>
      </div>
    </div>
  );
};

export default page;
