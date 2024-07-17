import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: any) {
  const jwt = request.cookies.get(process.env.COOKIE_NAME);
  if (!jwt) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    // jwt tiene que ser de tipo string para que jwtVerify lo pueda leer por lo que solo le pasamos jwt.value
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(process.env.SECRET_TOKEN_KEY)
    );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/web/:path*",
};
