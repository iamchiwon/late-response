import { NextResponse } from "next/server";

// /api/long 경로에 대한 POST 요청 처리
export async function POST(request: Request) {
  try {
    const body = await request.json();

    await new Promise((resolve) => setTimeout(resolve, 66 * 1000));

    return NextResponse.json({
      message: "Long API Success",
      receivedData: body,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to process short request.", message: `${e}` },
      { status: 500 }
    );
  }
}
