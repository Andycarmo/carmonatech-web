import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiPhone
} from "react-icons/fi";

function FooterLinks() {

  return (

    <section className="border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-4 gap-12">

        <div>

          <h3 className="text-2xl font-bold">

            CarmonaTech

          </h3>

          <p className="text-gray-400 mt-5 leading-7">

            Ingeniería Mecánica,
            Diseño CAD,
            Desarrollo Web
            y soluciones tecnológicas.

          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-6">

            Navegación

          </h4>

          <ul className="space-y-3 text-gray-400">

            <li>Inicio</li>

            <li>Lo que hago</li>

            <li>Tecnologías</li>

            <li>Experiencia</li>

            <li>Portafolio</li>

            <li>Contacto</li>

          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-6">

            Servicios

          </h4>

          <ul className="space-y-3 text-gray-400">

            <li>SolidWorks</li>

            <li>AutoCAD</li>

            <li>Revit</li>

            <li>Git</li>

            <li>React</li>

            <li>Flutter</li>

          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-6">

            Contacto

          </h4>

          <div className="space-y-4 text-gray-400">

            <div className="flex gap-3">

              <FiMail />

              ancarmonach@gmail.com.com

            </div>

            <div className="flex gap-3">

              <FiPhone />

              +57 3214649248

            </div>

            <div className="flex gap-3">

              <FiLinkedin />

            LinkedIn: andres-carmona-industrial
            </div>

            <div className="flex gap-3">

              <FiGithub />

              github.com/Andycarmo

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default FooterLinks;