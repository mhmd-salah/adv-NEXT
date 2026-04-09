
// Route Handler

import { ICommentResponse } from "@/lib/types/comment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const searchParams = request.nextUrl.searchParams;

  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('https://dummyjson.com/comments', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  const payload: ICommentResponse = await response.json();

  return NextResponse.json(payload, { status: 200 })
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  // const formData = await request.formData();

  if (!payload.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  return NextResponse.json({ message: `Hello, ${payload.name}` }, { status: 200 })
}