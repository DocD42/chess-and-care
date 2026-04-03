"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import {
  roleLabels,
  type WaitlistField,
  type WaitlistRole,
  waitlistRoles,
} from "@/lib/waitlist";
import { buttonClassNames } from "@/components/ui/button";

type FormState =
  | {
      status: "idle" | "submitting";
      message?: string;
      fieldErrors?: Partial<Record<WaitlistField, string>>;
    }
  | {
      status: "success";
      email: string;
      role?: WaitlistRole | null;
    };

type WaitlistResponse = {
  message?: string;
  email?: string;
  role?: WaitlistRole | null;
  fieldErrors?: Partial<Record<WaitlistField, string>>;
};

const inputClassName =
  "mt-2 w-full rounded-[1.15rem] border border-line bg-white px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [state, setState] = useState<FormState>({ status: "idle" });

  const isSubmitting = state.status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role: role || undefined,
        }),
      });

      const payload = (await response.json()) as WaitlistResponse;

      if (!response.ok) {
        setState({
          status: "idle",
          message: payload.message ?? "Please try again.",
          fieldErrors: payload.fieldErrors ?? {},
        });

        return;
      }

      setState({
        status: "success",
        email: payload.email ?? email,
        role: payload.role ?? null,
      });
      setEmail("");
      setRole("");
    } catch {
      setState({
        status: "idle",
        message: "Connection lost. Please try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div
        className="rounded-[1.7rem] border border-brand/20 bg-brand-soft p-6"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
          You are on the list
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">
          Thanks. We will keep you posted.
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-strong">
          Early access updates will go to <span className="font-semibold">{state.email}</span>
          {state.role ? ` as a ${roleLabels[state.role].toLowerCase()}` : ""}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.8rem] bg-white/85 p-6 shadow-[var(--shadow-card)]"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClassName}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            disabled={isSubmitting}
            required
          />
          {state.fieldErrors?.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-700">
              {state.fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="role" className="text-sm font-semibold text-foreground">
            Role <span className="text-muted">(optional)</span>
          </label>
          <select
            id="role"
            name="role"
            className={inputClassName}
            value={role}
            onChange={(event) => setRole(event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.role)}
            aria-describedby={state.fieldErrors?.role ? "role-error" : undefined}
            disabled={isSubmitting}
          >
            <option value="">Select your role</option>
            {waitlistRoles.map((item) => (
              <option key={item} value={item}>
                {roleLabels[item]}
              </option>
            ))}
          </select>
          {state.fieldErrors?.role ? (
            <p id="role-error" className="mt-2 text-sm text-red-700">
              {state.fieldErrors.role}
            </p>
          ) : null}
        </div>

        {state.message ? (
          <div className="rounded-[1.15rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.message}
          </div>
        ) : null}

        <button
          type="submit"
          className={buttonClassNames({ fullWidth: true })}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>

        <p className="text-sm leading-6 text-muted">
          This demo stores submissions locally so the flow works end to end
          during development. A real backend can replace the repository layer later.
        </p>
      </div>
    </form>
  );
}
