import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import OurBoat from "./components/OurBoat";
import Achievement from "./components/Achievement";
import Sponsorship from "./components/Sponsorship";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF4EF]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Achievement />
        <OurBoat />
        <Sponsorship />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
