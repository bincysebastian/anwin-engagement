import { NextResponse } from "next/server";

type RsvpBody = {
  attending: "yes" | "no" | null;
  firstName: string;
  lastName: string;
  mobile: string;
  guests: string;
  side: "bia" | "anwin" | "both" | null;
  dietary: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RsvpBody;

  if (!body.attending || !body.firstName?.trim() || !body.lastName?.trim() || !body.mobile?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const attending = body.attending === "yes";
  const headcount = attending ? Number(body.guests) : 0;
  if (attending && (!Number.isInteger(headcount) || headcount < 1 || headcount > 20)) {
    return NextResponse.json({ error: "Please enter the total members attending (1–20)" }, { status: 400 });
  }

  const formId = process.env.GOOGLE_FORM_ID;
  const requiredEntries = {
    attending: process.env.GF_ENTRY_ATTENDING,
    firstName: process.env.GF_ENTRY_FIRST_NAME,
    lastName: process.env.GF_ENTRY_LAST_NAME,
    mobile: process.env.GF_ENTRY_MOBILE,
    side: process.env.GF_ENTRY_SIDE,
  };
  const dietaryEntry = process.env.GF_ENTRY_DIETARY;
  const headcountEntry = process.env.GF_ENTRY_HEADCOUNT;
  const plusOneEntry = process.env.GF_ENTRY_PLUS_ONE;

  if (!formId || Object.values(requiredEntries).some((v) => !v)) {
    return NextResponse.json(
      {
        error:
          "RSVP backend is not configured. Add GOOGLE_FORM_ID and GF_ENTRY_* variables (see README).",
      },
      { status: 503 }
    );
  }

  const params = new URLSearchParams();
  params.set(requiredEntries.attending!, attending ? "Yes" : "No");
  params.set(requiredEntries.firstName!, body.firstName.trim());
  params.set(requiredEntries.lastName!, body.lastName.trim());
  params.set(requiredEntries.mobile!, body.mobile.trim());
  if (plusOneEntry) {
    params.set(plusOneEntry, headcount > 1 ? "Yes" : "No");
  }
  if (headcountEntry) {
    params.set(headcountEntry, String(headcount));
  }
  if (requiredEntries.side && body.side) {
    const sideLabel =
      body.side === "bia" ? "Bia's Side" : body.side === "anwin" ? "Anwin's Side" : "Both Sides";
    params.set(requiredEntries.side, sideLabel);
  }
  if (dietaryEntry && body.dietary?.trim()) {
    params.set(dietaryEntry, body.dietary.trim());
  }

  const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  const googleRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    redirect: "manual",
  });

  if (googleRes.status !== 200 && googleRes.status !== 302) {
    return NextResponse.json({ error: "Google Forms rejected the submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
