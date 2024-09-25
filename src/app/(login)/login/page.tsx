import { redirect } from "next/navigation"

import { auth } from "@/config/auth"

import { Login } from "./_components/login"

export default async function Page() {
  const session = await auth()

  if (session && session.user) {
    return redirect("/profile")
  }

  return <Login />
}
