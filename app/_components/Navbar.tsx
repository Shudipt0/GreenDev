"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

          <div className="flex gap-2"></div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              {logo.title}
            </Link>
            {/* <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// const renderMenuItem = (item: MenuItem) => {
//   if (item.items) {
//     return (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
//         <NavigationMenuContent className="bg-popover text-popover-foreground">
//           {item.items.map((subItem) => (
//             <NavigationMenuLink asChild key={subItem.title} className="w-80">
//               <SubMenuLink item={subItem} />
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     );
//   }

//   return (
//     <NavigationMenuItem key={item.title}>
//       <NavigationMenuLink
//         href={item.url}
//         className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
//       >
//         {item.title}
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//   );
// };

// const renderMobileMenuItem = (item: MenuItem) => {
//   if (item.items) {
//     return (
//       <AccordionItem key={item.title} value={item.title} className="border-b-0">
//         <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
//           {item.title}
//         </AccordionTrigger>
//         <AccordionContent className="mt-2">
//           {item.items.map((subItem) => (
//             <SubMenuLink key={subItem.title} item={subItem} />
//           ))}
//         </AccordionContent>
//       </AccordionItem>
//     );
//   }

//   return (
//     <a key={item.title} href={item.url} className="text-md font-semibold">
//       {item.title}
//     </a>
//   );
// };

// const SubMenuLink = ({ item }: { item: MenuItem }) => {
//   return (
//     <a
//       className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
//       href={item.url}
//     >
//       <div className="text-foreground">{item.icon}</div>
//       <div>
//         <div className="text-sm font-semibold">{item.title}</div>
//         {item.description && (
//           <p className="text-sm leading-snug text-muted-foreground">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

export { Navbar };
