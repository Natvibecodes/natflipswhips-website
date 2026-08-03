import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Inventory from "./components/Inventory";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <Packages />
      <Inventory />
      <About />
      <Reviews />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}