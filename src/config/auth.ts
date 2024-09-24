import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import { db } from "@/db/connect"
import { env } from "@/env/server"

const options = NextAuth({
  pages: {
    signIn: "/login",
  },
  adapter: DrizzleAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
  providers: [
    Google({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
})

export const { auth, handlers } = options
