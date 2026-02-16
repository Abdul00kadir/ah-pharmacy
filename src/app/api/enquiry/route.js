import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbxOtHZG_ypHMUhs7DIVETVPy3qavRRbJ63ySI4X129W73NpicL8MFf3bHCHgtocxoRl/exec";

export async function POST(request) {
  try {
    const payload = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Google script request failed." },
        { status: 502 }
      );
    }

    const result = await response.json().catch(() => ({ success: true }));

    return NextResponse.json(
      { success: Boolean(result?.success ?? true) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error while submitting enquiry." },
      { status: 500 }
    );
  }
}
