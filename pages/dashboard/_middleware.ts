import { NextRequest, NextResponse } from "next/server";
import { fakeToken } from '../../constants/token';

export function middleware(req: NextRequest) {
  const token = req.cookies.token;

  if (token && token === fakeToken) {
    return NextResponse.next();
  }

  return new Response('Nice try, dude.', { status: 401 });
}
