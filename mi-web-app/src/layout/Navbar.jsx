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

/*  Flota encima del Hero - Fondo semi-transparente
function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      <div className="flex justify-between items-center px-6 py-3 
      bg-white/10 backdrop-blur-md border border-white/20 
      rounded-2xl shadow-lg text-white">

        {/* LOGO }
        <h1 className="text-lg font-bold tracking-wide">
          CarmonaTech
        </h1>

        {/* LINKS }
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

export default Navbar;*/

import { motion } from "framer-motion";

const links = [
  "Inicio",
  "Servicios",
  "Proyectos",
  "Sobre mí",
  "Contacto",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 inset-x-0 z-50 flex justify-center px-6"
    >
      <nav
  className="
    w-full
    max-w-7xl
    flex
    items-center
    justify-between
    px-8
    py-4
    rounded-2xl
    border border-white/10
    bg-white/[0.06]
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(0,0,0,.25)]
  "
>
        {/* LOGO */}

        <div className="flex items-center gap-3">
          <div
            className="
            h-3
            w-3
            rounded-full

            bg-blue-500

            shadow-[0_0_20px_#3B82F6]
            "
          />

          <h1
            className="
            font-bold
            text-xl
            tracking-wide
            text-white
            "
          >
            Carmona<span className="text-blue-400">Tech</span>
          </h1>
        </div>

        {/* LINKS */}

        <ul className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <li
              key={item}
              className="
              text-gray-300

              hover:text-white

              duration-300

              cursor-pointer

              relative

              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0

              after:bg-blue-500

              after:duration-300

              hover:after:w-full
              "
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="
          hidden
          lg:block

          px-5
          py-2.5

          rounded-xl

          bg-blue-600

          hover:bg-blue-500

          duration-300
          "
        >
          Hablemos
        </button>
      </nav>
    </motion.header>
  );
}