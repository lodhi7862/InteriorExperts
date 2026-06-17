import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutUs from "@/components/sections/AboutUs";
import VisionMission from "@/components/sections/VisionMission";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import PrestigiousProjects from "@/components/sections/PrestigiousProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Clients from "@/components/sections/Clients";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import LenisProvider from "@/components/LenisProvider";
import BackgroundTheme from "@/components/BackgroundTheme";
import CustomCursor from "@/components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-full flex flex-col bg-primary text-white font-sans selection:bg-gold selection:text-primary">
      <BackgroundTheme />
      <LenisProvider>
        <CustomCursor />
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <Hero />
          <Stats />
          <AboutUs />
          <VisionMission />
          <Services />
          <Gallery />
          <PrestigiousProjects />
          <WhyChooseUs />
          <Clients />
          <Process />
          <Contact />
        </main>
        <Footer />
      </LenisProvider>
    </div>
  );
}
