/*Navbar clásico horizontal (estilo tradicional web)*/
/*function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold font-monoTech tracking-wider">CarmonaTech</h1>
      <ul className="flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
        <li className="hover:text-blue-400 cursor-pointer">Servicios</li>
        <li className="hover:text-blue-400 cursor-pointer">Proyectos</li>
        <li className="hover:text-blue-400 cursor-pointer">Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;*/

/*  Flota encima del Hero - Fondo semi-transparente*/
function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      <div className="flex justify-between items-center px-6 py-3 
      bg-white/10 backdrop-blur-md border border-white/20 
      rounded-2xl shadow-lg text-white">

        {/* LOGO */}
        <h1 className="text-lg font-bold tracking-wide">
          CarmonaTech
        </h1>

        {/* LINKS */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-blue-400 cursor-pointer transition">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Servicios</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Proyectos</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Contacto</li>
        </ul>

      </div>

    </nav>
  );
}

export default Navbar;