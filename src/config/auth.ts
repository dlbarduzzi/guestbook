import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import { env } from "@/env/server"

const options = NextAuth({
  providers: [
    Google({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
})

export const { auth, handlers } = options
