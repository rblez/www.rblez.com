import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}
