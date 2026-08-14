import { motion } from "framer-motion";
import {
    FiTool,
    FiMonitor,
    FiCpu
} from "react-icons/fi";

const services = [
    {
        icon: <FiTool size={32} />,
        title: "Ingeniería Mecánica",
        text: "Mantenimiento industrial, análisis de fallas, mejoramiento de procesos y documentación técnica."
    },
    {
        icon: <FiMonitor size={32} />,
        title: "Diseño CAD",
        text: "Modelado 3D y planos técnicos en SolidWorks, AutoCAD, Revit y FreeCAD."
    },
    {
        icon: <FiCpu size={32} />,
        title: "Desarrollo de Software",
        text: "Aplicaciones web y móviles enfocadas en digitalizar procesos industriales."
    }
];

export default function WhatIDo() {

    return (

        <section
            id="services"
            className="py-32"
        >

            <div className="max-w-7xl mx-auto px-8">

                <motion.h2

                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:.7}}

                    className="text-5xl font-bold mb-6"

                >

                    Lo que hago

                </motion.h2>

                <motion.p

                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:.2}}

                    className="text-zinc-400 max-w-3xl mb-20 leading-8"

                >

                    Mi experiencia combina ingeniería industrial, diseño CAD y desarrollo de software.
                    Me enfoco en crear soluciones reales para empresas y profesionales.

                </motion.p>

                <div className="grid md:grid-cols-3 gap-8">

                    {

                        services.map((service,index)=>(

                            <motion.div

                                key={index}

                                initial={{opacity:0,y:50}}

                                whileInView={{opacity:1,y:0}}

                                transition={{
                                    delay:index*.15
                                }}

                                whileHover={{
                                    y:-10
                                }}

                                className="group rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-10
                                transition"

                            >

                                <div className="w-16 h-16 rounded-2xl
                                bg-blue-500/10
                                text-blue-400
                                flex items-center justify-center
                                mb-8">

                                    {service.icon}

                                </div>

                                <h3 className="text-2xl font-semibold mb-4">

                                    {service.title}

                                </h3>

                                <p className="text-zinc-400 leading-8">

                                    {service.text}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}