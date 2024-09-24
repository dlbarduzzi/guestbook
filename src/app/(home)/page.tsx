import { auth } from "@/config/auth"

import { Heading } from "./_components/heading"

export default async function Home() {
  const session = await auth()
  const isAuthenticated = !!(session && session.user)
  return (
    <div className="bg-white">
      <Heading isAuthenticated={isAuthenticated} />
    </div>
  )
}
