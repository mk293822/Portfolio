import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 text-white mb-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Min Khant<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden lg:hidden md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
