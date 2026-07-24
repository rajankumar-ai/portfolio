import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Rajan Kumar
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            AI-Assisted Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/rajankumar-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4">
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Rajan Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;