import {
FiCheckCircle
} from "react-icons/fi";

const items = [
"Experiencia en mantenimiento industrial.",
"Diseño CAD para fabricación y documentación.",
"Desarrollo de aplicaciones para procesos industriales.",
"Aprendizaje constante de nuevas tecnologías.",
"Comunicación clara con equipos y clientes.",
"Compromiso con entregar soluciones reales."
];

export default function WorkingWithMe(){

return(

<section className="py-32">

<div className="max-w-7xl mx-auto px-8">

<div className="grid lg:grid-cols-2 gap-24 items-center">

<div>

<p className="text-blue-400 uppercase tracking-widest mb-4">
¿Por qué trabajar conmigo?
</p>

<h2 className="text-5xl font-bold mb-8">

No vendo humo.

<br/>

Construyo soluciones.

</h2>

<p className="text-gray-400 leading-8">

Durante mi experiencia en la industria he trabajado
resolviendo problemas reales.

Mi objetivo no es simplemente diseñar una pieza o escribir
código, sino comprender el proceso completo para entregar una
solución útil.

</p>

</div>

<div className="space-y-6">

{

items.map((item,index)=>(

<div
key={index}
className="flex items-start gap-4"
>

<FiCheckCircle
className="text-blue-500 mt-1"
size={22}
/>

<p className="text-lg text-gray-300">
{item}
</p>

</div>

))

}

</div>

</div>

</div>

</section>

);

}