import { SITE_CONFIG } from "../../config";

function Logo() {
  return (
    <div>
      <h1 className="text-xl font-bold text-white">
        {SITE_CONFIG.name}
      </h1>

      <p className="text-sm text-slate-400">
        {SITE_CONFIG.title}
      </p>
    </div>
  );
}

export default Logo;