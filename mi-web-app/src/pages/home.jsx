import Navbar from "../layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-red-500 flex items-center justify-center">
  <h1 className="text-7xl font-bold text-white">
    Tailwind funciona 🚀
  </h1>
</div>
      <Services />
      <Contact />
      <CustomCursor />
    </div>
  );
}