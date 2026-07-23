type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-slate-700 text-white hover:bg-slate-800";

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;