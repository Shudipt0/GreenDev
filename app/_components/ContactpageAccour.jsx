import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactpageAccour = () => {
  return (
    <div className=" w-full lg:h-[660px] flex flex-col lg:flex-row justify-between items-center  ">
      {/* left site */}
      <div className="lg:w-[480px] space-y-4">
        <h3 className="text-[22px] font-bold text-blue-500 leading-tight">
          FAQ
        </h3>
        <h1 className="text-[40px] text-black font-bold leading-tight">
          Here are Some Answer For Frequntly asked Questions
        </h1>
        <p className="text-[22px] text-[#0E0E2C]/60 ">
          We got alot of Message With the same Questions so here are some fast
          answer for populare Question
        </p>
      </div>
      {/* right site */}
      <div className="lg:w-[540px] ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do You offer Software Development</AccordionTrigger>
            <AccordionContent>
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer Social Media Marketing</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you Offer pack Services</AccordionTrigger>
            <AccordionContent>
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long it take to realise a project</AccordionTrigger>
            <AccordionContent>
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ContactpageAccour;
