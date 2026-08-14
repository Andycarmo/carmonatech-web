import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

function PortfolioCard({ project }) {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {

  if (!hover) {
    setCurrentImage(0);
    return;
  }

  if (!project.images || project.images.length === 0) return;

  const interval = setInterval(() => {

    setCurrentImage((prev) =>
      (prev + 1) % project.images.length
    );

  }, 900);

  return () => clearInterval(interval);

}, [hover, project.images]);

 const image = hover
  ? project.images[currentImage]
  : project.cover;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        group
        bg-white/5
        rounded-3xl
        overflow-hidden
        border border-white/10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-500/40
        hover:shadow-[0_20px_60px_rgba(59,130,246,.25)]
      "
    >
      {/* Imagen */}

      <div className="relative h-64 overflow-hidden bg-slate-800">
        {image ? (
          <img
            src={image}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Imagen próximamente
          </div>
        )}

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* Año */}

        {project.year && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs">
            {project.year}
          </div>
        )}
      </div>

      {/* Contenido */}

      <div className="p-6">

        <span className="text-blue-400 uppercase tracking-widest text-xs">
          {project.category}
        </span>

        <h3 className="mt-2 text-2xl font-bold transition-colors duration-300 group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}

        <div className="flex flex-wrap gap-2 mt-5">
          {project.software.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-300
                text-xs
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Botón */}

        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            text-blue-400
            transition-all
            duration-300
            group-hover:gap-4
          "
        >
          Ver proyecto
          <FiArrowUpRight />
        </button>

      </div>
    </div>
  );
}

export default PortfolioCard;