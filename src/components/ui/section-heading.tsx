type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
