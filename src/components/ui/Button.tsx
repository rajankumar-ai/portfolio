import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
  type?: "button" | "submit" | "reset";
};

function Button({
  children,
  variant = "primary",
  className = "",
  href,
  download,
  onClick,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-700 text-white hover:bg-slate-800";

  const classes = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;