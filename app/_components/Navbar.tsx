"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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

interface NavbarProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ mobileMenu, setMobileMenu }: NavbarProps) => {
  // const [mobilemenu, setMobileMenu] = useState(false);
  const pathName = usePathname();

  return (
    <section className="w-full">
      <div className=" container mx-auto px-6 lg:px-28 py-4 fixed top-0 z-50 shadow  bg-white ">
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
            <SignedOut>
              <button className="px-4 text-[14px] font-bold text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-600">
                
                <Link href="/sign-in">Log In</Link>
              </button>
              <button className="px-4 text-[14px] font-bold text-white bg-gray-500 rounded-md transition-colors hover:bg-gray-600">
                
                <Link href="/sign-up">Sign Up</Link>
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              {logo.title}
            </Link>
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="">
              {mobileMenu ? <FaTimes /> : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        
          <div  className={`lg:hidden flex flex-col items-center py-8 gap-4 bg-white shadow-md fixed w-full z-50 top-14 overflow-hidden transition-all ease-in-out duration-300 ${mobileMenu? ' max-h-96': 'max-h-0' } `}>
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
              <SignedOut>
                <button className="px-4 py-1 text-[14px] font-bold text-white bg-blue-500 rounded transition-colors hover:bg-blue-600">
                  
                  <Link href="/sign-in">Log In</Link>
                </button>
                <button className="px-4 py-1 text-[14px] font-bold text-white bg-gray-500 rounded transition-colors hover:bg-gray-600">
                 
                  <Link href="/sign-up">Sign Up</Link>
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
     
      )}
      {/* End Mobile Dropdown Menu */}

    </section>
  );
};

export { Navbar };
