import Contact from "@/components/LandingPage/Contact/Contact";
import Footer from "@/components/LandingPage/Footer/footer";
import HeroSection from "@/components/LandingPage/Hero/Hero";
import Services from "@/components/LandingPage/Services/Services";
import AboutUs from "@/components/LandingPage/About/About";
import Work from "@/components/LandingPage/Work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between w-full">
      <HeroSection />
      <Services />
      {/* <Work /> */}
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
