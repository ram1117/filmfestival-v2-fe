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
  },
  providers: [],
} satisfies NextAuthConfig;
