import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/api/auth/[...nextauth]/options';
import { getToken } from 'next-auth/jwt';
// export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/dashboard', '/signin', '/signup', '/'],
};

export default async function middleware(request: NextRequest) {
const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const url=request.nextUrl;
    if(url.pathname==="/" || !token && url.pathname==="/dashboard" )return NextResponse.redirect(new URL("/signin",url))
}