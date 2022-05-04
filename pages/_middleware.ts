import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log('Loading: ', req.url);
  return NextResponse.next();
}
