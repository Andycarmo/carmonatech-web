import { motion } from "framer-motion";
import avatar from "../../assets/images/hero/avatar-web.webp";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingObject from "./HeroFloatingObject";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />

      <HeroFloatingObject />
      
      {/* Avatar */}
      <div
  className="
    pointer-events-none
    absolute
    z-[5]
    hidden
    lg:block
    -right-8
    bottom-0
    w-[380px]
    xl:w-[440px]
    2xl:w-[500px]
  "
>
  {/*
   Blue glow */}
  <div
    className="
      absolute
      left-1/2
      top-[35%]
      -translate-x-1/2
      w-[75%]
      h-[65%]
      rounded-full
      bg-blue-500/25
      blur-[80px]
    "
  />

  {/* Avatar */}
  <img
    src={avatar}
    alt="Andrés Carmona"
    className="
      relative
      z-10
      block
      w-full
      h-auto
      object-contain
      drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  />
</div>

      <HeroContent />

      <HeroScroll />
    </section>
  );
}