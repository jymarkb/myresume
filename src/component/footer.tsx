import Socials from "./socials";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border flex justify-center">
      <div className="container-max-w w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="font-mono-tech text-xs text-muted-foreground">
          <span className="text-primaryTheme">{"<"}</span>
          built by Jay Mark Borja
          <span className="text-primaryTheme">{" />"}</span>
          <span className="opacity-50"> · © {year}</span>
        </div>
        <ul className="flex gap-2 items-center sm:ml-auto">
          <Socials />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
