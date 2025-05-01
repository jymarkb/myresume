import { aboutMeDescription, aboutMeSocial } from "@/lib/static-data";
const AboutMe = () => {
  return (
    <div className="container-max-w w-full bg-primary 2xl:rounded-2xl text-white py-8 px-6 sm:px-8 lg:p-12 xl:p-16 md:gap-8 lg:gap-12 xl:gap-16">
      <div className="flex items-center justify-center text-center w-full flex flex-col gap-2 mb-8">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          About Me
        </p>
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] font-semibold text-white">
          {"Dedicated to "}
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            {"building clean, "}
          </span>
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            {"user-focused "}
          </span>
          applications.
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b pb-8 md:pb-12">
        <div className="order-2 md:order-1 w-full md:max-w-sm md:pr-8 grid gap-4 mt-8 md:mt-0 sm:grid-cols-2 md:grid-cols-none">
          {aboutMeSocial.map((item, index) => {
            return (
              <div className="flex items-center gap-2 lg:gap-4" key={index}>
                <i
                  className={`flex items-center justify-center p-4 text-2xl  icon-${item.icon} rounded-full bg-white/20 h-14 w-14`}
                ></i>
                <div>
                  <h1 className="text-lg lg:text-xl font-bold">{item.data}</h1>
                  <p className="text-sm lg:text-md font-thin">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-1 md:order-2 md:border-l pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
          <div className="grid gap-8">
            {aboutMeDescription.map((item, index) => {
              return (
                <p key={index} className="text-lg">
                  {item.sentence}
                </p>
              );
            })}

            <p className="flex italic text-gray-300">
              <i className="icon-minus h-full" />
              <span className="ml-1">
                <strong className="font-semibold">
                  {"“Intelligence is the best weapon"}
                </strong>
                {
                  " in this world. Allowing you to live with an advantage over everyone else.”"
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
