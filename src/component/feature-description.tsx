const FeatureDescription = () => {
  return (
    <div className="sm:py-2 md:py-8 lg:py-16 lg:px-6 px-4 xl:px-8 flex flex-col justify-center gap-2 xl:gap-4">
      <h1 className="font-bold text-primaryTheme sm:text-lg md:text-xl xl:text-2xl">
        {"The </blog> Blog"}
      </h1>
      <p className="text-xs md:text-sm">
        The {"</blog>"} landing page is a sleek, responsive entry point to my
        custom CMS, built with Symfony 7, React 18, and Tailwind CSS. It
        features dynamic content, smooth interactions, and a clean layout for
        showcasing blog posts.
      </p>
      <div className="flex gap-2 md:gap-4 items-center mt-4">
        <a
          href="https://github.com/jymarkb/symfonyBlog"
          aria-label="github repository link"
          className="md:text-xl"
          target="_blank"
          rel="noreferrer"
        >
          <i className="rounded-full border border-white p-2 sm:h-6 sm:w-6 md:h-8 md:w-8 icon-github transition duration-300 hover:bg-primary"></i>
        </a>
        <a
          href="https://myblog.jymarkb.cloud/"
          className="flex items-center gap-2 border border-white w-fit px-2 md:px-4 py-2 rounded-sm transition duration-300 hover:bg-primary text-sm md:text-base"
          target="_blank"
          rel="noreferrer"
        >
          Visit Page <i className="icon-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default FeatureDescription;
