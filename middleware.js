import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

export function middleware(request) {
    const pathname = request?.nextUrl?.pathname === '/signup' || request?.nextUrl?.pathname === '/login'
    const isAuthenticated = cookies().get('auth_session');
    if (pathname && isAuthenticated) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!pathname && !isAuthenticated) {
        return NextResponse.redirect(new URL('/signup', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/signup'],
}