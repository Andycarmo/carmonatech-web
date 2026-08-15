import {
    SiAutodesk,
    SiReact,
    SiFlutter,
    SiGit,
    SiGithub,
    SiVite
} from "react-icons/si";

import {
    FiTool,
    FiCpu,
    FiSettings,
    FiCode,
    FiBox,
    FiImage,
    FiPenTool
} from "react-icons/fi";

const industrial = [
    {
        icon: <FiSettings />,
        name: "Mantenimiento Industrial"
    },
    //{
    //    icon: <FiCpu />,
    //    name: "Automatización"
    //},
    {
        icon: <FiTool />,
        name: "Análisis de Fallas"
    },
    {
        icon: <FiSettings />,
        name: "Mejora Continua"
    },
    {
        icon: <FiTool />,
        name: "Documentación Técnica"
    }

];

const cad = [
    {
        icon:<FiBox />,
        name:"SolidWorks"
    },
    {
        icon: <SiAutodesk />,
        name: "AutoCAD / Revit"
    },
      {
    icon: <FiImage />,
    name: "Photoshop"
  },
  {
    icon: <FiPenTool />,
    name: "Illustrator"
  }
    //{
    //    icon: <FiTool />,
     //   name: "FreeCAD"
    //}
];

const software = [
    {
        icon: <SiReact />,
        name: "React"
    },
    //{
    //    icon: <SiFlutter />,
    //    name: "Flutter"
    //},
    {
        icon: <SiGit />,
        name: "Git"
    },
    {
        icon: <SiGithub />,
        name: "GitHub"
    },
    {
        icon: <SiVite />,
        name: "Vite"
    },
    {
        icon: <FiCode />,
        name: "VS Code"
    }
];




export default function Technologies() {

    return (

<section className="py-24">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-20">

<p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
Tecnologías
</p>

<h2 className="text-5xl font-bold mb-6">
Herramientas con las que trabajo
</h2>

<p className="text-gray-400 max-w-3xl mx-auto leading-8">
Estas son las tecnologías y metodologías que utilizo para desarrollar proyectos industriales, diseño CAD y aplicaciones modernas.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

<Card
title="Ingeniería"
items={industrial}
/>

<Card
title="Diseño / CAD"
items={cad}
/>

<Card
title="Desarrollo"
items={software}
/>



</div>

</div>

</section>

    );

}

function Card({title,items}){

return(

<div className="bg-white/5 rounded-3xl border border-white/10 p-8">

<h3 className="text-2xl font-bold mb-8">
{title}
</h3>

<div className="space-y-5">

{

items.map((item,index)=>(

<div
key={index}
className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300"
>

<div className="text-blue-400 text-2xl">

{item.icon}

</div>

<p>{item.name}</p>

</div>

))

}

</div>

</div>

)

}