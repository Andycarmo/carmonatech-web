import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <CustomCursor />
    </div>
  );
}

export default App;
