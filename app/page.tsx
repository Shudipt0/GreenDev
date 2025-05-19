import AboutHero from "./_components/AboutHero";
import { ClientCompany } from "./_components/ClientCompany";
import { HeroBannner } from "./_components/HeroBanner";
import ProjectHero from "./_components/ProjectHero";
import Services from "./_components/Services";
import Testmonial from "./_components/Testmonial";



export default function Home() {
  return (
  <div className="w-full ">
    <div className="container mx-auto px-6 lg:px-28  ">
      <HeroBannner/>
      <ClientCompany/>
      <Services/>
      <AboutHero/>
      <ProjectHero/>
      <Testmonial/>
    
    </div>
    
  </div>
  );
}
