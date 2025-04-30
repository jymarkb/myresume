import ButtonExpandImage from "./expand-button";
const OverflowDescription = () => {
  return (
    <div
      className="absolute top-0 right-0 h-full w-1/3 bg-gray-800/95 text-white 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300 
          "
    >
      <div className="flex justify-end p-2">
        <ButtonExpandImage buttonId="0" />
      </div>
      <div className="py-16 px-8 flex flex-col justify-center gap-4">
        <h1 className="font-bold text-primaryTheme text-2xl">
          {"The </blog> Blog"}
        </h1>
        <p className="text-sm">
          The {"</blog>"} landing page is a sleek, responsive entry point to my
          custom CMS, built with Symfony 7, React 18, and Tailwind CSS. It
          features dynamic content, smooth interactions, and a clean layout for
          showcasing blog posts.
        </p>
        <div className="flex gap-4 items-center mt-4">
          <a
            href="https://github.com/jymarkb/symfonyBlog"
            aria-label="github repository link"
            className="text-xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="rounded-full border border-white p-2 h-8 w-8 icon-github transition duration-300 hover:bg-primary"></i>
          </a>
          <a
            href="https://myblog.jymarkb.cloud/"
            className="flex items-center gap-2 border border-white w-fit px-4 py-2 rounded-sm transition duration-300 hover:bg-primary"
            target="_blank"
            rel="noreferrer"
          >
            Visit Page <i className="icon-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default OverflowDescription;
