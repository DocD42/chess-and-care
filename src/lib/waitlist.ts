export const waitlistRoles = ["player", "club", "coach", "curious"] as const;

export type WaitlistRole = (typeof waitlistRoles)[number];
export type WaitlistField = "email" | "role";

export type WaitlistInput = {
  email: string;
  role?: WaitlistRole;
};

export type WaitlistSubmission = WaitlistInput & {
  id: string;
  submittedAt: string;
};

export type WaitlistValidationResult =
  | {
      success: true;
      data: WaitlistInput;
    }
  | {
      success: false;
      message: string;
      fieldErrors?: Partial<Record<WaitlistField, string>>;
    };

export const roleLabels: Record<WaitlistRole, string> = {
  player: "Player",
  club: "Club",
  coach: "Coach",
  curious: "Curious",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function validateWaitlistInput(value: unknown): WaitlistValidationResult {
  if (!isRecord(value)) {
    return {
      success: false,
      message: "Please submit a valid waitlist request.",
    };
  }

  const rawEmail = typeof value.email === "string" ? value.email.trim().toLowerCase() : "";
  const rawRole = typeof value.role === "string" ? value.role.trim().toLowerCase() : "";

  const fieldErrors: Partial<Record<WaitlistField, string>> = {};

  if (!rawEmail) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!emailPattern.test(rawEmail)) {
    fieldErrors.email = "Please use a valid email address.";
  }

  if (rawRole && !waitlistRoles.includes(rawRole as WaitlistRole)) {
    fieldErrors.role = "Please choose a valid role.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please review the highlighted fields.",
      fieldErrors,
    };
  }

  return {
    success: true,
    data: {
      email: rawEmail,
      role: rawRole ? (rawRole as WaitlistRole) : undefined,
    },
  };
}
