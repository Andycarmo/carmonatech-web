import { FiBriefcase, FiBookOpen, FiAward } from "react-icons/fi";

const timeline = [

{
title:"Unilever",
subtitle:"Técnico de Mantenimiento Industrial",
period:"2022 - Actualidad",
icon:<FiBriefcase />,
description:
"Experiencia en mantenimiento preventivo y correctivo de equipos industriales, diagnóstico de fallas, montaje mecánico y mejora continua.",
skills:[
"Mantenimiento Industrial",
"Diagnóstico de Fallas",
"Reductores",
"Motores",
"Transportadores",
"Documentación Técnica"
]
},

{
title:"Experiencia Industrial",
subtitle:"Empresas del sector manufacturero",
period:"Experiencia previa",
icon:<FiAward />,
description:
"Participación en procesos industriales, mantenimiento mecánico, montaje de equipos y soporte técnico.",
skills:[
"Montaje",
"Soldadura",
"Alineación",
"Procesos Industriales",
"Seguridad Industrial"
]
},

{
title:"Formación",
subtitle:"Ingeniería Industrial",
period:"Actualmente",
icon:<FiBookOpen />,
description:
"Complementando la experiencia técnica con formación profesional en ingeniería industrial, desarrollo de software y diseño CAD.",
skills:[
"Ingeniería Industrial",
"SolidWorks",
"AutoCAD",
"Revit",
"React",
"Flutter"
]
}

];

export default function Experience(){

return(

<section 
id="experience"
className="py-24">

<div className="max-w-6xl mx-auto px-8">

<div className="text-center mb-24">

<p className="uppercase tracking-[0.3em] text-blue-400 mb-4">

Mi experiencia

</p>

<h2 className="text-5xl font-bold">

Una trayectoria construida

<br/>

resolviendo problemas reales.

</h2>

</div>

<div className="relative border-l border-white/10 ml-5">

{

timeline.map((item,index)=>(

<div
key={index}
className="mb-20 ml-12 relative"
>

<div className="absolute -left-[58px] top-1 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">

{item.icon}

</div>

<p className="text-blue-400 mb-2">

{item.period}

</p>

<h3 className="text-3xl font-bold">

{item.title}

</h3>

<h4 className="text-xl text-gray-400 mb-6">

{item.subtitle}

</h4>

<p className="text-gray-400 leading-8 mb-8">

{item.description}

</p>

<div className="flex flex-wrap gap-3">

{

item.skills.map((skill)=>(

<span
key={skill}
className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
>

{skill}

</span>

))

}

</div>

</div>

))

}

</div>

</div>

</section>

);

}