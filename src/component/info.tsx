import Image from "next/image";
import AuthorSocial from "./author-social";
const Info = () => {
  return (
    <div className="container-max-w w-full flex flex-col justify-center md:flex-row py-8 px-6 sm:px-8 lg:p-12 xl:p-16 md:gap-8 lg:gap-12 xl:gap-16">
      <div className="lg:flex lg:ml-auto items-center hidden hidden-pop">
        <Image
          className="rounded-xl shadow-lg object-cover aspect-square md:max-w-[300px] md:max-h-full lg:max-h-[350px] lg:max-w-[350px] xl:max-w-[450px] xl:max-h-[450px] 2xl:max-w-[500px] 2xl:max-h-[500px] overflow"
          src="/images/webp/avatar.webp"
          width={500}
          height={500}
          alt="Jay Mark Borja"
          loading="eager"
        />
      </div>

      <div className="font-semibold flex items-center justify-center">
        <div className="author-wrapper h-fit grid w-fit gap-2 lg:gap-3 xl:gap-4 text-primary/85">
          <div className="flex gap-4 flex-col sm:flex-row md">
            <div className="static lg:hidden order-2 sm:order-1 hidden-pop mb-2">
              <Image
                className="rounded-xl shadow-lg object-cover overflow aspect-square sm:max-w-[180px] md:max-w-[210px]"
                src="/images/webp/avatar.webp"
                width={500}
                height={500}
                alt="Jay Mark Borja avatar"
                loading="eager"
              />
            </div>

            <div className="order-1 sm:order-2 hidden-up">
              <div className="grid gap-1 sm:gap-3 md:gap-4">
                <div className="flex gap-2 items-center">
                  <span className="span-text text-md xl:text-lg">
                    {"<span>"}
                  </span>
                  <span className="text-lg xl:text-xl">{"Hello, I'm"}</span>
                  <span className="span-text text-md xl:text-lg">
                    {"</span>"}
                  </span>
                </div>
                <h1 className="font-bold text-[2.5rem] sm:text-5xl md:text-6xl xl:text-7xl w-fit z-10">
                  Jay Mark Borja
                </h1>
                <h2 className="text-[1.7rem] md:text-4xl xl:text-5xl">
                  A
                  <span className="ml-2 bg-gradient-to-r from-primaryTheme to-indigo-500 text-white px-3 py-1 rounded-sm border-solid shadow-md filter animate-subtlePulse">
                    {"{ Web Developer }"}
                  </span>
                </h2>
                <h3 className="text-lg xl:text-xl">
                  based in Quezon City, Philippines
                </h3>
              </div>
            </div>
          </div>

          <p
            id="desc-info"
            className="min-h-[90px] leading-8 lg:leading-9 xl:leading-9 lg:text-md xl:text-lg text-gray-600 max-w-[610px] hidden-right"
          >
            <span className="span-text">{"<p>"}</span>
            {" I'm a web developer, experience in "}
            <span className="span-text">
              building and maintaining full-stack web applications
            </span>
            {". I specialize in creating "}
            <span className="span-text">
              responsive, reusable UI components
            </span>
            {" and contributing to robust server-side functionality. "}
            <span className="span-text">{"</p>"}</span>
          </p>

          <div className="author-btn flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mt-2 2xl:mt-8">
            <AuthorSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
