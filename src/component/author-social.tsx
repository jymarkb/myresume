import GetInTouch from "./get-in-touch";
import Socials from "./socials";
const AuthorSocial = () => {
  return (
    <>
      <div className="flex gap-4">
        <GetInTouch />
        <a
          className="px-6 sm:px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105"
          href="/projects"
        >
          See my work
        </a>
      </div>
      <ul className="flex font-thin gap-4 items-center sm:ml-auto md:ml-0 lg:ml-auto">
        <Socials />
      </ul>
    </>
  );
};

export default AuthorSocial;
