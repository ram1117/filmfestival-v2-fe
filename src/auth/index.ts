import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db";
import bcrypt from "bcryptjs";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await db.user.findFirst({
          where: { email: email as string },
        });
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          password as string,
          user.password
        );
        if (passwordMatch)
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session && token.sub) {
        session.userId = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
