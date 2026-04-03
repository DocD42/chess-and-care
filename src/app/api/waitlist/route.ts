import { validateWaitlistInput } from "@/lib/waitlist";
import { waitlistRepository } from "@/lib/waitlist-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Please submit the waitlist form as JSON." },
      { status: 400 },
    );
  }

  const validationResult = validateWaitlistInput(payload);

  if (!validationResult.success) {
    return Response.json(
      {
        message: validationResult.message,
        fieldErrors: validationResult.fieldErrors ?? {},
      },
      { status: 400 },
    );
  }

  try {
    const result = await waitlistRepository.add(validationResult.data);

    if (result.status === "duplicate") {
      return Response.json(
        {
          message: "This email is already on the waitlist.",
          fieldErrors: {
            email: "This email is already on the waitlist.",
          },
        },
        { status: 409 },
      );
    }

    return Response.json(
      {
        message: "Success",
        email: result.submission.email,
        role: result.submission.role ?? null,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("waitlist_save_failed", error);

    return Response.json(
      {
        message: "We could not save your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
