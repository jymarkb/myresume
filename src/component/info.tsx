import Image from "next/image";
import Socials from "./socials";
const Info = () => {
  return (
    <div className="container-max-w w-full flex p-16 gap-16 ">
      <div className="font-semibold flex items-center justify-center">
        <div className="author-wrapper h-fit grid w-fit gap-4 text-primary/85">
          <div className="flex gap-2 items-center">
            <span className="span-text text-lg">&lt;span&gt;</span>
            <span className="text-2xl">Hello, I&rsquo;m</span>
            <span className="span-text text-lg">&lt;/span&gt;</span>
          </div>
          <h1 className="font-bold text-8xl w-fit z-10">Jay Mark Borja</h1>
          <h2 className="text-6xl">
            A
            <span className="ml-2 bg-gradient-to-r from-primaryTheme to-indigo-500 text-white px-3 py-1 rounded-sm border-solid shadow-md filter animate-subtlePulse">
              &#123; Web Developer &#125;
            </span>
          </h2>
          <h3 className="text-2xl">based in Quezon City, Philippines</h3>
          <p className="text-lg text-gray-600 max-w-[670px] leading-9">
            <span className="span-text">&lt;p&gt;</span> I&rsquo;m a web
            developer, experience in&nbsp;
            <span className="span-text">
              building and maintaining full-stack web applications
            </span>
            . I specialize in creating&nbsp;
            <span className="span-text">
              responsive, reusable UI components&nbsp;
            </span>
            &nbsp; and contributing &nbsp; to robust server-side functionality.
            <span className="span-text">&lt;/p&gt;</span>
          </p>

          <div className="author-btn flex items-center gap-4 mt-8">
            <a
              className="px-8 py-2 bg-primary text-white rounded shadow-md transition duration-300 hover:bg-primary/90 hover:scale-105"
              href="/talk-with-me"
            >
              Talk with me
            </a>
            <a
              className="px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105"
              href="/see-my-work"
            >
              See my work
            </a>
            <ul className="flex font-thin gap-4 ml-auto">
              <Socials />
            </ul>
          </div>
        </div>
      </div>

      <div className="flex ml-auto items-center">
        {/* <div className="image-container"></div> */}
        <Image
          src="/images/webp/admin.webp"
          width={500}
          height={500}
          alt="Jay Mark Borja"
          className="rounded-xl shadow-lg object-cover max-w-[500px] max-h-[500px] overflow"
        />
      </div>
    </div>
  );
};

export default Info;
