import Link from "next/link";
import { NavItem } from "./nav-item";
import { MobileNavItem } from "./mobile-nav-item";
import { MobileNavbar } from "./mobile-navbar";
import Image from "next/image";
import NavLogo from "@/assets/brand-logos/nav-logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between gap-10 py-2">
        <Link href="/" className="flex items-center gap-3 w-38 h-20 relative">
          <Image src={NavLogo} alt="Akriti Sky Morph logo" fill className="object-contain" />
        </Link>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 md:flex justify-end uppercase">
            <NavItem label="Services" href="#services" />
            <NavItem label="Solutions" href="#solutions" />
            <NavItem label="About Akriti Sky Morph" href="#about" />
            <NavItem label="Say Hey" href="mailto:sales@skymorphs.com" />
          </nav>
        </div>
        <MobileNavbar>
          <div className="rounded-b-lg bg-white py-4 container text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              <MobileNavItem label="Services" href="#services" />
              <MobileNavItem label="Solutions" href="#solutions" />
              <MobileNavItem label="About Akriti Sky Morph" href="#about" />
              <MobileNavItem label="Say Hey" href="mailto:sales@skymorphs.com" />
            </nav>
          </div>
        </MobileNavbar>
      </div>
    </header>
  );
};

export default Navbar;
