import { FaWhatsapp } from "react-icons/fa";

function FooterCTA() {

  return (

    <section className="max-w-7xl mx-auto px-8 py-24 text-center">

      <span className="text-blue-400 uppercase tracking-[0.3em] text-sm">

        Disponible para trabajar

      </span>

      <h2 className="text-5xl font-bold mt-6">

        ¿Hablamos sobre tu proyecto o una oportunidad laboral?

      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">

        Estoy disponible para oportunidades laborales, proyectos freelance y consultoría en ingeniería, diseño CAD y desarrollo web.

      </p>

      <a
  href="https://wa.me/573214649248?text=Hola%20Andrés,%20vi%20tu%20sitio%20web%20y%20me%20gustaría%20hablar%20contigo."
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    mt-10
    px-8
    py-4
    rounded-full
    bg-green-600
    hover:bg-green-500
    transition-all
    duration-300
    font-semibold
    hover:scale-105
  "
>
    <FaWhatsapp size={22} />
  Hablemos
</a>

    </section>

  );

}

export default FooterCTA;