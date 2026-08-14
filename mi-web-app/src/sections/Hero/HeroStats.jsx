const stats=[

{

number:"+15",

label:"Años"

},

{

number:"+50",

label:"Proyectos"

},

{

number:"+5",

label:"Tecnologías"

}

]

export default function HeroStats(){

return(

<div

className="

mt-20

grid

grid-cols-3

gap-10

max-w-xl

"

>

{

stats.map((item)=>(

<div
key={item.label}
>

<h3

className="

text-4xl

font-bold

text-blue-400

"

>

{item.number}

</h3>

<p

className="

text-slate-400

"

>

{item.label}

</p>

</div>

))

}

</div>

)

}