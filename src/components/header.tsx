import Link from "next/link";
import NavItem from "./nav-item";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavItem } from "./mobile-navitem";


export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      {/* Logo and Title */}
      <Link href={"/"} className="flex items-center gap-3">
        <span className=" rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          codelearnhub
        </span>
      </Link>

      <div className="flex items-center gap-10">
        <nav className="hidden md:flex items-center gap-10 justify-end">
          <NavItem label={"About Us"} href={"/about"} />
        </nav>
      </div>

      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem label={"About"} href={"/about"} />
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
