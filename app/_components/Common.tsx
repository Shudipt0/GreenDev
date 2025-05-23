import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";


type CommonProps = {
  page: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const Common = ({page, title, description, buttonText, buttonLink}: CommonProps) => {
  return (
    <div className='w-[768px] flex flex-col justify-center items-center text-center space-y-8 ' >
      <h4 className="text-[22px] text-blue-500 font-bold " >{page} </h4>
      <h1 className="text-[40px] font-bold " >{title}</h1>
      <p className="text-[22px] text-[#0E0E2C]/60 lg:w-[732px]">{description}</p>
       <Link href={buttonLink} > <button className="flex items-center gap-3 text-[22px] px-3 py-1 " >{buttonText} <span className="text-blue-500 pt-1 "><IoArrowForwardSharp /></span></button>
</Link>
    </div>
  )
}

export default Common
