import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const { data } = await axios.get(`${process.env.API_BASE}/api/city/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching cities:", error);

    // ถ้า axios error จะมี response object
    if (error.response) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch cities",
          message: error.response.data?.message || error.message,
          status: error.response.status,
        },
        { status: error.response.status }
      );
    }

    // Network error หรือ error อื่นๆ
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch cities",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
