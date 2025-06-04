import * as React from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function AboutPageCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="w-[160px] flex flex-col gap-4 ">
              <div className="w-full h-[235px] bg-slate-400 rounded-sm " ></div>
              <h2 className="text-[22px] font-bold " >Jamila Smail</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 " >CO-Founder</p>
            </div>
          </CarouselItem>
           <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className=" w-[160px] flex flex-col gap-4 ">
              <div className="w-full h-[235px] bg-slate-400 rounded-sm " ></div>
              <h2 className="text-[22px] font-bold " >Farouk Dari</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 " >Full Stack Developer</p>
            </div>
          </CarouselItem> <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
           <div className=" w-[160px] flex flex-col gap-4 ">
              <div className="w-full h-[235px] bg-slate-400 rounded-sm " ></div>
              <h2 className="text-[22px] font-bold " >Aksel Juba</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 " >Graphic Designer</p>
            </div>
          </CarouselItem> <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
           <div className=" w-[160px] flex flex-col gap-4 ">
              <div className="w-full h-[235px] bg-slate-400 rounded-sm " ></div>
              <h2 className="text-[22px] font-bold " >Dihia Numida</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 " >UI/UX Designer</p>
            </div>
          </CarouselItem> <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className=" w-[160px] flex flex-col gap-4 ">
              <div className="w-full h-[235px] bg-slate-400 rounded-sm " ></div>
              <h2 className="text-[22px] font-bold " >Jamila Smail</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 " >CO-Founder</p>
            </div>
          </CarouselItem>
        
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex"/>
    </Carousel>
  )
}
