import type {
  OnboardingQuestionDefinition,
  QuestionAnswerMap,
} from "@/lib/types/product";

type QuestionFieldProps = {
  field: OnboardingQuestionDefinition;
  answers: QuestionAnswerMap;
};

function readSingleValue(answers: QuestionAnswerMap, key: string) {
  const value = answers[key];
  return typeof value === "string" ? value : "";
}

function readMultiValue(answers: QuestionAnswerMap, key: string) {
  const value = answers[key];
  return Array.isArray(value) ? value : [];
}

export function QuestionField({ field, answers }: QuestionFieldProps) {
  if (field.type === "text") {
    return (
      <label className="block rounded-[1.5rem] border border-line bg-white/75 p-5 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold text-foreground">{field.label}</span>
        <span className="mt-2 block text-sm leading-6 text-muted">
          {field.description}
        </span>
        <input
          type="text"
          name={field.key}
          defaultValue={readSingleValue(answers, field.key)}
          placeholder={field.placeholder}
          className="mt-4 w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className="block rounded-[1.5rem] border border-line bg-white/75 p-5 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold text-foreground">{field.label}</span>
        <span className="mt-2 block text-sm leading-6 text-muted">
          {field.description}
        </span>
        <textarea
          name={field.key}
          defaultValue={readSingleValue(answers, field.key)}
          placeholder={field.placeholder}
          rows={5}
          className="mt-4 w-full rounded-[1rem] border border-line bg-white px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </label>
    );
  }

  if (field.type === "single-select") {
    return (
      <fieldset className="rounded-[1.5rem] border border-line bg-white/75 p-5 shadow-[var(--shadow-card)]">
        <legend className="text-sm font-semibold text-foreground">{field.label}</legend>
        <p className="mt-2 text-sm leading-6 text-muted">{field.description}</p>
        <div className="mt-4 grid gap-3">
          {field.options?.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-start gap-3 rounded-[1rem] border border-line bg-white px-4 py-3 transition-colors hover:border-line-strong"
            >
              <input
                type="radio"
                name={field.key}
                value={option.value}
                defaultChecked={readSingleValue(answers, field.key) === option.value}
                className="mt-1 h-4 w-4 border-line text-brand focus:ring-brand/20"
              />
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {option.label}
                </span>
                {option.hint ? (
                  <span className="mt-1 block text-sm text-muted">{option.hint}</span>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <fieldset className="rounded-[1.5rem] border border-line bg-white/75 p-5 shadow-[var(--shadow-card)]">
      <legend className="text-sm font-semibold text-foreground">{field.label}</legend>
      <p className="mt-2 text-sm leading-6 text-muted">{field.description}</p>
      <div className="mt-4 grid gap-3">
        {field.options?.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-start gap-3 rounded-[1rem] border border-line bg-white px-4 py-3 transition-colors hover:border-line-strong"
          >
            <input
              type="checkbox"
              name={field.key}
              value={option.value}
              defaultChecked={readMultiValue(answers, field.key).includes(option.value)}
              className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand/20"
            />
            <span>
              <span className="block text-sm font-semibold text-foreground">
                {option.label}
              </span>
              {option.hint ? (
                <span className="mt-1 block text-sm text-muted">{option.hint}</span>
              ) : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
