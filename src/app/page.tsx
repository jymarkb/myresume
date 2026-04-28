import "@/assets/css/home.css";
import Headers from "@/component/header";
import Info from "@/component/info";
import AboutMe from "@/component/about";
import TechStack from "@/component/tech-stack";
import Services from "@/component/services";
import Projects from "@/component/projects";
import Testimonials from "@/component/testimonials";
import Talk from "@/component/talk";
import ThemedToaster from "@/component/themed-toaster";
import Footer from "@/component/footer";
import ClientObserver from "@/component/animation/client-observer";
import { PageObserver } from "@/component/animation/page-observer";

export default function Home() {
  return (
    <main className="grid grid-cols-1">
      <Headers />

      <section id="home" className="wrapper flex justify-center">
        <Info />
      </section>

      <section id="aboutme" className="wrapper section-alt flex justify-center">
        <AboutMe />
      </section>

      <section id="expertise" className="wrapper flex justify-center">
        <TechStack />
      </section>

      <section
        id="services"
        className="wrapper section-alt flex justify-center"
      >
        <Services />
      </section>

      <section id="projects" className="wrapper flex justify-center">
        <Projects />
      </section>

      <section
        id="testimonials"
        className="wrapper section-alt flex justify-center"
      >
        <Testimonials />
      </section>

      <section id="contact" className="wrapper flex justify-center">
        <Talk />
      </section>

      <div id="modal-overlay"></div>
      <Footer />
      <ClientObserver animate={PageObserver} />
      <ThemedToaster />
    </main>
  );
}
