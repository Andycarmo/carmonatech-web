import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/10">

      <FooterCTA />

      <FooterLinks />

      <FooterBottom />

    </footer>
  );
}

export default Footer;