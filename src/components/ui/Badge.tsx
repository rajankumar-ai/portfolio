type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-400">
      {children}
    </span>
  );
}

export default Badge;