import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    try {
      await analytics.track("pageview", {
        page: "/",
        country: req.geo?.country,
        city: req.geo?.city,
        region: req.geo?.region,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
