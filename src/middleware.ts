import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
const pvt_routes = [
	"/dashboard",'/automations'
]
export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
	if(sessionCookie){
	if(request.nextUrl.pathname==='/auth'){
	    return NextResponse.redirect(new URL("/dashboard", request.url));
	}
	}
	else{
	if (pvt_routes.includes(request.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/auth", request.url));
	}
	}
	
	
 
	return NextResponse.next();
}
 
// export const config = {
// 	matcher: ["/dashboard",'/','/auth'], // Specify the routes the middleware applies to
// };