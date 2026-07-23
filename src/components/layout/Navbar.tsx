import { SITE_CONFIG } from "../../config";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold text-white">
              {SITE_CONFIG.name}
            </h1>

            <p className="text-sm text-slate-400">
              {SITE_CONFIG.title}
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {SITE_CONFIG.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="secondary">
              Download CV
            </Button>

            <Button>
              Hire Me
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;