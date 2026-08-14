/*import blueprint from "../../assets/images/hero/hero-blueprint.webp";

export default function HeroBackground() {
  return (
    <>
 {/* Fondo base }
      <div
        className="
        absolute
        inset-0
        bg-[#050816]
        "
      />
      {/* Blueprint }
     <div
  className="
    absolute
    left-[-300px]
    top-[-100px]

    w-[1300px]
    h-[1300px]

    bg-contain
    bg-no-repeat

    opacity-[0.4]
    pointer-events-none
  "
  style={{
    backgroundImage: `url(${blueprint})`,
  }}
/>


{/* Luz superior }
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top,#3B82F620,transparent_55%)]

        "
      />

      {/* Glow izquierdo }
      <div
        className="
        absolute
        left-[-300px]
        top-[-300px]

        h-[700px]
        w-[700px]

        rounded-full

        blur-[180px]

        bg-blue-500/20
        "
      />

      {/* Glow derecho }
      <div
        className="
        absolute
        bottom-[-250px]
        right-[-250px]

        h-[600px]
        w-[600px]

        rounded-full

        blur-[160px]

        bg-violet-600/20
        "
      />
            {/* Oscurece}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}
*/


import blueprint from "../../assets/images/hero/hero-blueprint.webp";

export default function HeroBackground() {
  return (
    <>
      {/* Fondo base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Glow azul */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#3B82F620,transparent_55%)]
        "
      />

      {/* Blueprint de ingeniería */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.8]
          bg-center
          bg-no-repeat
          bg-cover
        "
        style={{
          backgroundImage: `url(${blueprint})`,
        }}
      />

      {/* Glow izquierdo */}
      <div
        className="
          absolute
          -left-72
          -top-72
          w-[700px]
          h-[700px]
          rounded-full
          blur-[180px]
          bg-blue-500/20
        "
      />

      {/* Glow derecho */}
      <div
        className="
          absolute
          -right-72
          -bottom-72
          w-[600px]
          h-[600px]
          rounded-full
          blur-[160px]
          bg-violet-600/20
        "
      />

      {/* Oscurecedor */}
      <div className="absolute inset-0 bg-black/30" />
    </>
  );
}