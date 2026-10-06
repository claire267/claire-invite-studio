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
            return null;
          }

          const email = String(credentials.email)
            .trim()
            .toLowerCase();

          const password = String(credentials.password);

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            console.error("AUTH: User not found");
            return null;
          }

          if (user.role !== "ADMIN") {
            console.error("AUTH: User is not an admin");
            return null;
          }

          const validPassword = await bcrypt.compare(
            password,
            user.passwordHash
          );

          if (!validPassword) {
            console.error("AUTH: Password verification failed");
            return null;
          }

          console.log("AUTH: ADMIN LOGIN SUCCESS");

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("AUTH ERROR:", error);
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
};