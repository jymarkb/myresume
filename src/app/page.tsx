import "@/assets/css/home.css";
import Headers from "@/component/header";
import Info from "@/component/info";
import AboutMe from "@/component/about";
import TechStack from "@/component/tech-stack";
import Services from "@/component/services";
import Work from "@/component/work";
import Talk from "@/component/talk";
import Socials from "@/component/socials";

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

      <footer className="h-20 border-t-8 border-primary flex justify-center">
        <div className="container-max-w w-full p-4 flex items-center gap-4 relative">
          <div className="font-semibold">© 2025 Jay Mark B.</div>
          <ul className="flex gap-4 items-center ml-auto">
            <Socials />
          </ul>
        </div>
      </footer>
    </main>
  );
}
