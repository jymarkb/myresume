import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="h-20 border-t-8 border-primary flex justify-center">
      <div className="container-max-w w-full p-4 flex items-center gap-4 relative">
        <div className="font-semibold">© 2025 Jay Mark B.</div>
        <ul className="flex gap-4 items-center ml-auto">
          <Socials />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
