import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  await revalidateTag("prismic", {});

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
