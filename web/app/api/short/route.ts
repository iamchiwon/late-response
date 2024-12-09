import { LateResponse } from "@shared/models/response";
import { NextResponse } from "next/server";

// /api/short 경로에 대한 POST 요청 처리
export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json<LateResponse>({
      success: true,
      message: "Short API Success",
      body: JSON.stringify(body),
    });
  } catch (e) {
    return NextResponse.json<LateResponse>(
      {
        success: false,
        error: "Failed to process short request.",
        message: `${e}`,
      },
      { status: 500 }
    );
  }
}
