// This single file gives you working login/logout/session endpoints
// at /api/auth/signin, /api/auth/signout, /api/auth/session, etc.
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
