import { env } from "@/env/client"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Guestbook",
  description:
    // eslint-disable-next-line max-len
    "A guestbook app where users can write welcoming messages and spread positivity.",
  url: env.NEXT_PUBLIC_BASE_URL,
}
