import GetInTouch from "./get-in-touch";
import Socials from "./socials";
import TargetLink from "./target-link";
const AuthorSocial = () => {
  return (
    <>
      <div className="flex gap-4">
        <GetInTouch />
        <TargetLink
          style="px-5 sm:px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105"
          target="#projects"
        >
          See my work
        </TargetLink>
      </div>
      <ul className="flex font-thin gap-4 items-center sm:ml-auto md:ml-0 lg:ml-auto">
        <Socials />
      </ul>
    </>
  );
};

export default AuthorSocial;
