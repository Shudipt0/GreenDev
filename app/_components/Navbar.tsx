"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";


const logo = {
  title: "GreenDev",
  url: "/",
};
const menu = [
  { title: "Home", url: "/" },
  {
    title: "Who are We?",
    url: "/about",
  },
  {
    title: "Our Services",
    url: "/services",
  },
  {
    title: "Our Projects",
    url: "/projects",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(false);
  const pathName = usePathname();

  return (
    <section className=" ">
      <div className=" container mx-auto px-6 lg:px-28 py-4 fixed top-0 z-50 shadow-sm  bg-white ">
        {/* Desktop Menu */}
        <nav className=" hidden justify-between  lg:flex ">
          {/* Logo */}
          <div>
            <Link
              href={logo.url}
              className="text-2xl font-bold tracking-tighter"
            >
              {logo.title}
            </Link>
          </div>
          <div className="flex items-center gap-3 ">
            {menu.map((nav) => (
              <Link
                key={nav.title}
                href={nav.url}
                className={`px-4 py-2 text-[16px] font-bold transition-colors hover:text-black ${
                  pathName === nav.url ? "text-black" : "text-[#0E0E2C]/60  "
                }`}
              >
                {nav.title}
                <div
                  className={`{${
                    pathName === nav.url
                      ? "w-2 py-[2px] bg-blue-500 rounded-full transition-all ease-in-out duration-200 "
                      : ""
                  }}`}
                ></div>
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            <button className="px-4 text-[14px] font-bold text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-600">
              Login
            </button>
             <button className="px-4 text-[14px] font-bold text-white bg-gray-500 rounded-md transition-colors hover:bg-gray-600">
              Signin
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              {logo.title}
            </Link>
            {/* Mobile Menu Button */}
            <button onClick={()=> setMobileMenu(!mobilemenu)}  className="" >
              {mobilemenu ? <FaTimes /> : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {mobilemenu && (
        <div className="lg:hidden bg-white shadow-md fixed top-14 left-0 w-full z-50">
          <div className="flex flex-col items-center py-4">
            {menu.map((nav) => (
              <Link
                key={nav.title}
                href={nav.url}
                className={`px-4 py-2 text-[16px] font-bold transition-colors hover:text-black ${
                  pathName === nav.url ? "text-black" : "text-[#0E0E2C]/60"
                }`}
                onClick={() => setMobileMenu(false)}
              >
                {nav.title}
              </Link>
            ))}

            <div className="flex gap-2 mt-4 ">
            <button className="px-4 py-1 text-[14px] font-bold text-white bg-blue-500 rounded transition-colors hover:bg-blue-600">
              Login
            </button>
             <button className="px-4 py-1 text-[14px] font-bold text-white bg-gray-500 rounded transition-colors hover:bg-gray-600">
              Signin
            </button>
          </div>
          </div>
        </div>
      )}
      {/* End Mobile Dropdown Menu */}
      {/* <div className="fixed w-full h-screen top-14  " ></div> */}
      
    </section>
  );
};



export { Navbar };
