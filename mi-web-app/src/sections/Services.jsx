/*function Services() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Servicios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Servicio 1 }
        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
          <p className="text-gray-400">
            Aplicaciones web modernas, dashboards y sistemas empresariales.
          </p>
        </div>
        {/* Servicio 2 }
        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Apps Móviles</h3>
          <p className="text-gray-400">
            Aplicaciones para control de procesos, reportes y operación en campo.
          </p>
        </div>
        {/* Servicio 3 }
        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Software Industrial</h3>
          <p className="text-gray-400">
            Automatización, mantenimiento y soluciones para industria.
          </p>
        </div>
        {/* Servicio 4 }
        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Diseño & BIM</h3>
          <p className="text-gray-400">
            Modelado en Revit, diseño mecánico en SolidWorks y proyectos técnicos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
*/

function Services() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Servicios
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* CARD */}
        <div className="group">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/assets/web.jpg"
              alt="Desarrollo Web"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Desarrollo Web</h3>
            <p className="text-gray-400 text-sm">Aplicaciones web modernas</p>
          </div>
        </div>

        {/* CARD */}
        <div className="group">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/assets/mobile.jpg"
              alt="Apps Móviles"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Apps Móviles</h3>
            <p className="text-gray-400 text-sm">Apps para procesos industriales</p>
          </div>
        </div>

        {/* CARD */}
        <div className="group">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/assets/software.jpg"
              alt="Software Industrial"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Software Industrial</h3>
            <p className="text-gray-400 text-sm">Automatización y control</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;