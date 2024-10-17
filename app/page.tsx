import "./globals.css";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { Features } from "./components/Features";
import { WhyConsultia } from "./components/WhyConsultia";
import { OrientedPeople } from "./components/OrientedPeople";
import { Testimonial } from "./components/Testimonial";
import { JoinOurMission } from "./components/JoinOurMission";
import { Footer } from "./components/Footer";
import { TrustedCompanies } from "./components/TrustedCompanies";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <WhyConsultia />
      <OrientedPeople />
      <Testimonial />
      <JoinOurMission />
      <Footer />
    </>
  );
}
