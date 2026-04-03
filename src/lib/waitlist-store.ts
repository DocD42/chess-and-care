import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { WaitlistInput, WaitlistSubmission } from "@/lib/waitlist";

export type SaveWaitlistResult =
  | {
      status: "created";
      submission: WaitlistSubmission;
    }
  | {
      status: "duplicate";
      submission: WaitlistSubmission;
    };

export interface WaitlistRepository {
  add(input: WaitlistInput): Promise<SaveWaitlistResult>;
}

const dataDirectory = path.join(process.cwd(), "data");
const dataFilePath = path.join(dataDirectory, "waitlist-submissions.json");

function isSubmission(value: unknown): value is WaitlistSubmission {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.id === "string" &&
    typeof record.email === "string" &&
    typeof record.submittedAt === "string"
  );
}

async function readSubmissions(): Promise<WaitlistSubmission[]> {
  try {
    const content = await readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(content) as unknown;

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isSubmission);
  } catch (error) {
    const { code } = error as NodeJS.ErrnoException;

    if (code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeSubmissions(submissions: WaitlistSubmission[]) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(dataFilePath, `${JSON.stringify(submissions, null, 2)}\n`, "utf8");
}

class LocalWaitlistRepository implements WaitlistRepository {
  async add(input: WaitlistInput): Promise<SaveWaitlistResult> {
    const submissions = await readSubmissions();

    const duplicate = submissions.find(
      (submission) => submission.email.toLowerCase() === input.email.toLowerCase(),
    );

    if (duplicate) {
      return {
        status: "duplicate",
        submission: duplicate,
      };
    }

    const submission: WaitlistSubmission = {
      id: randomUUID(),
      email: input.email,
      role: input.role,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);
    await writeSubmissions(submissions);

    return {
      status: "created",
      submission,
    };
  }
}

export const waitlistRepository: WaitlistRepository = new LocalWaitlistRepository();
