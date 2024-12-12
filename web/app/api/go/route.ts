import { LateResponse } from "@shared/models/response";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json<LateResponse>({
      success: true,
      message: "Success",
    });
  } catch (e) {
    return NextResponse.json(
      { error: `Failed to process request.`, message: `${e}` },
      { status: 500 }
    );
  }
}
