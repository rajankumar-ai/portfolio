import { useState } from "react";
import {
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import Container from "../ui/Container";
import Button from "../ui/Button";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import useActiveSection from "../../hooks/useActiveSection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="relative flex h-20 items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            <NavLinks activeSection={activeSection} />
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="secondary"
              href="/profile.pdf"
              download
            >
              Download
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Reach Me
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-3xl text-white transition hover:text-blue-400 lg:hidden"
          >
            {menuOpen ? (
              <HiOutlineXMark />
            ) : (
              <HiOutlineBars3 />
            )}
          </button>

          <MobileMenu
            open={menuOpen}
            activeSection={activeSection}
            onClose={() => setMenuOpen(false)}
          />
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;