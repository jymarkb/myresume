import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="h-20 sticky top-0 bg-background/95 z-50 flex items-center justify-center border-b-4 border-primary shadow-lg">
      <nav className="container-max-w w-full flex items-center py-4 px-16">
        <div className="logo">
          <Image
            src="/images/logo.svg"
            alt="website logo"
            width={150}
            height={48}
          />
        </div>
        <div className="ml-auto font-semibold flex gap-8">
          <ul className="flex gap-8 nav-header">
            <li className="h-fit active">
              <Link href="#home">Home</Link>
            </li>
            <li className="h-fit">
              <Link href="#aboutme">About Me</Link>
            </li>
            <li className="h-fit">
              <Link href="#services">Services</Link>
            </li>
            <li className="h-fit">
              <Link href="#experties">Experties</Link>
            </li>
            <li className="h-fit8">
              <Link href="#work">Recent Work</Link>
            </li>
            <li className="h-fit8">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
