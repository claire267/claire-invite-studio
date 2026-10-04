import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error("AUTH: Missing email or password");
            return null;
          }

          const email = String(credentials.email)
            .trim()
            .toLowerCase();

          const password = String(credentials.password);

          console.log("AUTH: Login attempt:", email);

          /*
           * =====================================================
           * ADMIN LOGIN
           * =====================================================
           *
           * The admin password is stored in Vercel as:
           *
           * ADMIN_PASSWORD
           *
           * This avoids relying on the existing database
           * password hash for the main admin account.
           */

          if (email === "claireinvitestudio@gmail.com") {
            const adminPassword = process.env.ADMIN_PASSWORD;

            console.log(
              "AUTH: ADMIN_PASSWORD exists:",
              Boolean(adminPassword)
            );

            if (!adminPassword) {
              console.error(
                "AUTH ERROR: ADMIN_PASSWORD is missing from production environment"
              );
              return null;
            }

            console.log(
              "AUTH: ADMIN_PASSWORD length:",
              adminPassword.length
            );

            if (password !== adminPassword) {
              console.error("AUTH: Admin password does not match");
              return null;
            }

            const admin = await prisma.user.findUnique({
              where: {
                email: "claireinvitestudio@gmail.com",
              },
            });

            if (!admin) {
              console.error(
                "AUTH ERROR: Admin user does not exist in database"
              );
              return null;
            }

            if (admin.role !== "ADMIN") {
              console.error(
                "AUTH ERROR: User exists but is not ADMIN"
              );
              return null;
            }

            console.log("AUTH: ADMIN LOGIN SUCCESS");

            return {
              id: admin.id,
              email: admin.email,
              name: admin.name,
              role: "ADMIN",
            };
          }

          /*
           * =====================================================
           * NORMAL USER / COUPLE LOGIN
           * =====================================================
           */

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            console.error("AUTH: User not found:", email);
            return null;
          }

          const validPassword = await bcrypt.compare(
            password,
            user.passwordHash
          );

          if (!validPassword) {
            console.error(
              "AUTH: Database password verification failed"
            );
            return null;
          }

          console.log(
            "AUTH: Normal user login successful:",
            email
          );

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("AUTH AUTHORIZE ERROR:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }

      return session;
    },
  },

  debug: true,
};