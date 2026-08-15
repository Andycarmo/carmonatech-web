function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Contacto
      </h2>
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        ¿Tienes un proyecto en mente? Hablemos y llevemos tu idea a una solución real.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* WhatsApp */}
        <a
          href="https://wa.me/573214649248?text=Hola%20Andres,%20vi%20tu%20web%20y%20quiero%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
        {/* Email */}
        <a
          href="ancarmonach@gmail.com"
          className="bg-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition"
        >
          Enviar Email
        </a>
      </div>
    </section>
  );
}

export default Contact;