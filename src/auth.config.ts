import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: { signIn: "/authentication/signin" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedPage =
        nextUrl.pathname.startsWith("/reserve") ||
        nextUrl.pathname.startsWith("/account");

      if (isProtectedPage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(nextUrl);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (session && token.user) {
        // @ts-expect-error: Let's ignore a compile error
        session.user = token.user;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
