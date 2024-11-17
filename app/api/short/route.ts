import { NextResponse } from "next/server";

// /api/short 경로에 대한 POST 요청 처리
export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      message: "Short API Success",
      receivedData: body,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to process short request.", message: `${e}` },
      { status: 500 }
    );
  }
}
