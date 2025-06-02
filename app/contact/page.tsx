"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import snake from "@/app/images/snake.svg";
import ContactpageAccour from "../_components/ContactpageAccour";
import ServicePageCarousel from "../_components/ServicePageCarousel";
import { useActionState } from "react";
import { createContact } from "../actions/contact/createContact";

const ContactPage = () => {
  const [state, action, isPending] = useActionState(createContact,null);
  console.log(state?.errors)
  return (
    <div className="w-full relative">
      <div className="w-full container mx-auto px-6 lg:px-28 mt-32 flex flex-col items-center ">
        {/* part1 */}
        <div className="w-[768px] flex flex-col justify-center items-center text-center space-y-8 ">
          <h4 className="text-[22px] text-blue-500 font-bold ">
            Let’s Have a chat
          </h4>
          <h1 className="text-[40px] font-bold ">An expert at your services</h1>
          <div className="w-[540px] z-10 ">
            <form
              action={action}
              className="mx-auto flex w-full flex-col gap-10 "
            >
              <div className="w-full flex gap-8">
                <div className="grid w-full text-start gap-1.5 bg-white">
                  <Label htmlFor="name" className="text-sm font-bold ">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className=""
                  />
                   {state?.errors && ( <p className="text-red-500 font-semibold text-[12px] py-2 ">{state.errors.name}</p>)}
                </div>
              </div>
              <div className="grid w-full text-start items-center gap-1.5 bg-white">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
                 {state?.errors && ( <p className="text-red-500 font-semibold text-[12px] py-2 ">{state.errors.email}</p>)}
              </div>
              <div className="grid w-full text-start items-center gap-1.5 bg-white">
                <Label htmlFor="phone">Your Phone Number</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                /> {state?.errors && ( <p className="text-red-500 font-semibold text-[12px] py-2 ">{state.errors.phone}</p>)}
              </div>
              <div className="grid w-full text-start gap-1.5 bg-white">
                <Label htmlFor="message">Messages</Label>
                <Textarea
                  placeholder="About What do you want to talk?"
                  className="resize-none h-[200px]"
                  id="message"
                  name="message"
                />
                 {state?.errors && ( <p className="text-red-500 font-semibold text-[12px] py-2 ">{state.errors.message}</p>)}
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer bg-blue-500"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        {/* part2 */}
        <ContactpageAccour/>
        {/* part3 */}
        <div className="w-full lg:pb-32 ">
        <ServicePageCarousel />
      </div>
      </div>
      <div className="absolute w-full top-40 ">
        <Image src={snake} alt="" className="w-full z-0" />
      </div>
    </div>
  );
};

export default ContactPage;
