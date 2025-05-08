import "@/assets/css/home.css";
import Headers from "@/component/header";
import Info from "@/component/info";
import AboutMe from "@/component/about";
import TechStack from "@/component/tech-stack";
import Services from "@/component/services";
import Work from "@/component/work";
import Talk from "@/component/talk";
import { Toaster } from "sonner";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main className="grid grid-cols-1">
      <Headers />

      <section id="home" className="wrapper flex justify-center">
        <Info />
      </section>

      <section id="aboutme" className="wrapper flex justify-center">
        <AboutMe />
      </section>

      <section id="experties" className="wrappe flex justify-center">
        <TechStack />
      </section>

      <section id="services" className="wrapper flex justify-center">
        <Services />
      </section>

      <section id="work" className="bg-primary flex justify-center">
        <Work />
      </section>

      <section id="contact" className="wrapper flex justify-center">
        <Talk />
      </section>

      <Toaster richColors />

      <Footer />
    </main>
  );
}
