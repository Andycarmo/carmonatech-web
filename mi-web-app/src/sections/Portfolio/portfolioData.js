import bomba from "../../assets/images/portfolio/bomba/bba-cover.webp";
import bomba1 from "../../assets/images/portfolio/bomba/01.webp";
import bomba2 from "../../assets/images/portfolio/bomba/02.webp";
import bomba3 from "../../assets/images/portfolio/bomba/03.webp";
import mecanica from "../../assets/images/portfolio/mecanica/mec.webp";
import mecanica1 from "../../assets/images/portfolio/mecanica/mec1.webp";
import mecanica2 from "../../assets/images/portfolio/mecanica/mec2.webp";
//import revit from "../../assets/images/portfolio/casa-finca-venado.webp";
//import parametrico from "../../assets/images/portfolio/parametrico.webp";
import cad from "../../assets/images/portfolio/cad.webp";
import web from "../../assets/images/portfolio/web.webp";

export const portfolio = [

{
id:1,
title:"Mantenimiento Mecánico",
category:"Ingeniería Mecánica",
cover:mecanica,
images:[
    mecanica1,
    mecanica2,
  ],
software:["Mecanica"],
year:"2026",
role:"Mantenimiento Mecánico",
description:"Mantenimiento preventivo y correctivo de maquinaria industrial, incluyendo inspección, lubricación y reparación de componentes.",
contribution:[
        "Mecanica",
        "Análisis de Fallas",
        "Herramientas y Equipos",
        "Corrección de Problemas",
    ]
},

{
id:2,
title:"Modelado de Bomba Multietapas",
category:"Ingeniería Mecánica",
cover:bomba,
images:[
    bomba1,
    bomba2,
    bomba3
  ],
software:["SolidWorks"],
year:"2024",
role:"Diseño CAD",
description:"Modelado CAD 3D del conjunto interno de una bomba multietapa para documentación técnica y mantenimiento.",
contribution:[
        "Modelado 3D",
        "Ensamblaje",
        "Explosión del conjunto",
        "Planos técnicos"
    ]
},

{
id:3,
title:"Plano Mecánico",
category:"CAD",
 cover:cad,
  images:[
      cad
  ],
software:["AutoCAD"],
year:"2023",

  role:"Diseño CAD",
description:"Planos de fabricación y documentación técnica.",
contribution:[
      "Modelado",
      "Planos"
  ]
},

/**{
id:4,
title:"Modelo BIM",
category:"BIM",
 cover:revit,
  images:[
      revit
  ],
software:["Revit"],
year:"2023",

  role:"Diseño CAD",
description:"Modelado arquitectónico y coordinación de elementos.",
contribution:[
      "Modelado",
      "Planos"
  ]
},

/**{
id:5,
title:"Diseño Paramétrico",
category:"CAD",
 cover:parametrico,
  images:[
      parametrico
  ],
software:["FreeCAD"],
year:"2023",

  role:"Diseño CAD",
description:"Diseño paramétrico de componentes mecánicos.",
contribution:[
      "Modelado",
      "Planos"
  ]
},**/

{
id:4,
title:"Paginas Web",
category:"Web",
 cover:web,
  images:[
      web
  ],
software:["React","Tailwind"],
year:"2026",

  role:"Diseño CAD",
description:"Desarrollo de esta página web profesional.",
contribution:[
      "Modelado",
      "Planos"
  ]
},

/**{
id:6,
title:"Horium",
category:"Software",
 cover:cad,
  images:[
      revit
  ],
software:["Flutter"],
year:"2023",

  role:"Diseño CAD",
description:"Aplicación móvil para gestión de nómina y jornadas laborales.",
contribution:[
      "Modelado",
      "Planos"
  ]
}**/

];