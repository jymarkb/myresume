import { aboutMeDescription, aboutMeSocial } from "@/lib/static-data";
const AboutMe = () => {
  return (
    <div className="container-max-w w-full bg-primary p-16 grid gap-8 rounded-2xl text-white">
      <div className="flex items-center justify-center text-center w-full flex flex-col gap-2 mb-8">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          About Me
        </p>
        <h1 className="text-6xl max-w-[900px] font-semibold text-white">
          Dedicated to{" "}
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            building clean,
          </span>{" "}
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            user-focused{" "}
          </span>
          applications.
        </h1>
      </div>

      <div className="flex border-b pb-12">
        <div className="max-w-sm w-full grid gap-8">
          {aboutMeSocial.map((item, index) => {
            return (
              <div className="flex items-center gap-4" key={index}>
                <i
                  className={`flex items-center justify-center p-4 text-2xl  icon-${item.icon} rounded-full bg-white/20 h-14 w-14`}
                ></i>
                <div>
                  <h1 className="text-xl font-bold">{item.data}</h1>
                  <p className="text-md font-thin">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-l pl-16">
          <div className="grid gap-8">
            {aboutMeDescription.map((item, index) => {
              return (
                <p key={index} className="text-lg">
                  {item.sentence}
                </p>
              );
            })}

            <p className="flex items-center italic text-gray-300">
              <i className="icon-minus mr-2" />
              <strong className="font-semibold">
                &quot;Intelligence is the best weapon
              </strong>
              <span className="ml-1">
                in this world. Allowing you to live with an advantage over
                everyone else.&quot;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
