import { ArrowDownRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const HeroBannner = ({
  heading = "We Help People To Bring Their Ideas Alive ",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
 
    secondary: {
      text: "Check our Services",
      url: "/services",
    },
  },

}: HeroProps) => {
  return (
    <section>
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ">
        <div className="mx-auto flex flex-col items-center text-start md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
         
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.secondary && (
              <Button asChild variant="outline">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroBannner };
