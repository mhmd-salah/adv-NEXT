import { IPost } from "@/lib/types/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: RouteContext<'/api/posts/[id]'>) {
  const id = (await context.params).id;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  const payload: IPost | { message: string } = await response.json();

  if ('message' in payload) {
    return NextResponse.json(payload, { status: response.status })
  }

  return NextResponse.json(payload, { status: response.status })
}