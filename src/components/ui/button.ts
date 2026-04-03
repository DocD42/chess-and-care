type ButtonVariant = "primary" | "secondary";

type ButtonClassOptions = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-65";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-brand text-white shadow-[var(--shadow-card)] hover:bg-brand-strong",
  secondary:
    "border-line bg-white/70 text-foreground hover:border-line-strong hover:bg-white",
};

export function buttonClassNames({
  variant = "primary",
  fullWidth = false,
}: ButtonClassOptions = {}) {
  return [baseClassName, variants[variant], fullWidth ? "w-full" : ""]
    .filter(Boolean)
    .join(" ");
}
