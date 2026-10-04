// Extends NextAuth's built-in types so TypeScript knows about
// session.user.role and session.user.id everywhere in the app.
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: { id: string; name: string; email: string; role: Role };
  }
  interface User {
    role: Role;
  }
}
