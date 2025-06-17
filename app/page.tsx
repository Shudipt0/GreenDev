import AboutHero from "./_components/AboutHero";
import { ClientCompany } from "./_components/ClientCompany";
import DashboardButton from "./_components/DashboardButton";
import { HeroBannner } from "./_components/HeroBanner";
import ProjectHero from "./_components/ProjectHero";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div className="w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32">
      <div className="mt-0"><DashboardButton /></div>
      <HeroBannner />
      <ClientCompany />
      <Services />
      <AboutHero />
      <ProjectHero />
   </div>
  );
}
