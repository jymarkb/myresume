import Tech from "./tech";
import AnimatedTech from "./animated-tech";

const TechStack = () => {
  return (
    <div className="container-max-w w-full py-8 sm:px-8 lg:p-12 xl:p-16 md:gap-8 lg:gap-12 xl:gap-16">
      <div className="flex items-center flex-col text-center gap-2 text-primary/85 mb-4 sm:mb-8 lg:mb-12 xl:mb-16">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          Experties
        </p>
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] font-semibold">
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Skills and Knowledge
          </span>
          <span> Across Diverse Technologies</span>
        </div>
      </div>

      <div className="flex lg:gap-8 xl:gap-12 2xl:gap-16 justify-center items-center">
        <div className="flex-grow h-fit bg-primary sm:rounded-2xl p-6 sm:p-8 gap-4">
          <Tech />
        </div>

        <div className="lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] overflow-hidden hidden lg:grid grid-cols-3 lg:gap-2 xl:gap-4 text-white">
          <AnimatedTech />
        </div>
      </div>
    </div>
  );
};
export default TechStack;
