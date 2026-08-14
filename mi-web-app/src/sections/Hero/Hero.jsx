import Container from "../../ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <HeroContent />
      </Container>

      <HeroScroll />
    </section>
  );
}