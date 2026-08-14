import { portfolio } from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {

  return (

    <section
      id="portfolio"
      className="py-32 bg-[#090B1A]"
    >

      <div className="max-w-7xl mx-auto px-8">

        <span className="text-blue-400 uppercase tracking-widest">
          Portafolio
        </span>

        <h2 className="text-5xl font-bold mt-3">
          Algunos trabajos
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Estos proyectos representan parte de mi experiencia en
          ingeniería mecánica, diseño CAD y desarrollo de software.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {portfolio.map(project => (

            <PortfolioCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Portfolio;