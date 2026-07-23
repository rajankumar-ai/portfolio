import { SITE_CONFIG } from "../../config";

type NavLinksProps = {
  activeSection: string;
  onLinkClick?: () => void;
};

function NavLinks({
  activeSection,
  onLinkClick,
}: NavLinksProps) {
  const handleClick = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  event.preventDefault();

  const section = document.querySelector<HTMLElement>(href);

  if (!section) return;

  const navbarHeight = 80;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  onLinkClick?.();
};

  return (
    <>
      {SITE_CONFIG.navigation.map((item) => {
        const sectionId = item.href.replace("#", "");

        const active = activeSection === sectionId;

        return (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative pb-1 font-medium transition-all duration-300 ${
                active
                  ? "text-blue-500"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-blue-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                }`}
                />
            </a>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;