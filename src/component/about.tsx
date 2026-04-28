import { aboutMeDescription } from "@/lib/static-data";
import AboutSocial from "./about-social";

const AboutMe = () => {
  return (
    <div className="container-max-w w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 hidden-up">
          <div className="section-eyebrow">About</div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Building{" "}
            <span className="text-accent-gradient">clean, user-focused</span>{" "}
            applications.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground font-mono-tech">
            // a quick intro
          </p>
        </div>

        <div className="lg:col-span-7 grid gap-6">
          <div className="grid gap-4 hidden-right">
            {aboutMeDescription.map((item, index) => (
              <p
                key={index}
                className="text-base lg:text-lg leading-relaxed text-muted-foreground"
              >
                {item.sentence}
              </p>
            ))}
          </div>

          <blockquote className="border-l-2 border-primaryTheme/60 pl-4 text-sm lg:text-base italic text-muted-foreground hidden-right">
            <strong className="text-foreground/90 font-semibold">
              &ldquo;Intelligence is the best weapon
            </strong>{" "}
            in this world. Allowing you to live with an advantage over everyone
            else.&rdquo;
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <AboutSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
