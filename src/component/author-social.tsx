import Socials from "./socials";
const AuthorSocial = () => {
  return (
    <>
      <div className="flex gap-4">
        <a
          className="px-6 sm:px-8 py-2 bg-primary text-white rounded shadow-md transition duration-300 hover:bg-primary/90 hover:scale-105"
          href="/talk-with-me"
        >
          Talk with me
        </a>
        <a
          className="px-6 sm:px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105"
          href="/see-my-work"
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
