import Card from "../../components/ui/Card";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <Card className="h-full">
      <h3 className="text-3xl font-bold text-white">
        Let's Build Something Great Together
      </h3>

      <p className="mt-5 leading-8 text-slate-400">
        I'm currently open to full-time opportunities, freelance projects,
        remote work, and relocation opportunities across Europe. If you're
        looking for a Full-Stack Developer, I'd love to hear from you.
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="text-white">
              your@email.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-slate-400">Location</p>
            <p className="text-white">
              Haryana, India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaBriefcase className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-slate-400">Availability</p>
            <p className="text-white">
              Open to Full-Time & Relocation Opportunities
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-700 p-3 text-white transition hover:border-blue-500 hover:text-blue-400"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-700 p-3 text-white transition hover:border-blue-500 hover:text-blue-400"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </Card>
  );
}

export default ContactInfo;