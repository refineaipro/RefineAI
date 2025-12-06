import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("New Waitlist Entry:", body);

  // Later → Save to DB, Google Sheet, Airtable, etc.
  return NextResponse.json({ success: true });
}
