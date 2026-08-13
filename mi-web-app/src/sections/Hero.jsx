import { useCursor } from "../context/CursorContext";

function Hero() {
  const { setHover } = useCursor();

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white text-center overflow-hidden">
      
      {/* 🔥 FONDO GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 top-20 left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-4">
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
  Andres Carmona
</h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Desarrollo soluciones digitales para la industria:
          Apps Web, Software y Diseño Industrial
        </p>

        <button  
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
        >
          Ver proyectos
        </button>

      </div>
    </section>
  );
}

export default Hero;