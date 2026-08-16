import {motion} from "framer-motion";
import Container from "../../ui/Container";
import Badge from "../../ui/Badge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import {hero} from "./heroData";
import {fadeUp} from "./heroVariants";
export default function HeroContent(){
return(
<Container>
    <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="
        relative
        z-10
        max-w-6xl
        pt-24
        lg:pt-32
        "
    >
    <Badge>
        {hero.badge}
    </Badge>
        <h1
            className="
            mt-8
            text-6xl
            lg:text-8xl
            font-bold
            leading-none
            "
        >
    {hero.title1}
        <br/>
        <span
            className="
            text-blue-400
            "
            >
        {hero.title2}
        </span>
        <br/>
            {hero.title3}
        </h1>
<p
  className="
    mt-8
    max-w-2xl
    text-xl
    leading-relaxed
    text-slate-300
  "
>
  Soy{" "}
  <span className="font-semibold text-blue-400">
    Andrés Carmona
  </span>
  , {hero.description}
</p>
<HeroButtons/>
<HeroStats/>
</motion.div>
</Container>
)
}