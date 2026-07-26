import { AnimatePresence, motion } from "framer-motion";

import Button from "../ui/Button";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onClose: () => void;
};

function MobileMenu({
  open,
  activeSection,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute left-0 top-20 w-full rounded-b-2xl border border-slate-800 bg-slate-950 shadow-2xl lg:hidden"
        >
          <div className="p-6">
            <ul className="space-y-6">
              <NavLinks
                activeSection={activeSection}
                onLinkClick={onClose}
              />
            </ul>

            <div className="mt-8 flex flex-col gap-4">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;