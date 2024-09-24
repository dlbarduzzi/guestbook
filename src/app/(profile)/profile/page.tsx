import { redirect } from "next/navigation"

import { Container } from "@/components/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"

import { auth } from "@/config/auth"

export default async function Page() {
  const session = await auth()

  if (!session || !session.user) {
    return redirect("/login")
  }

  return (
    <div className="bg-white">
      <Container className="py-8">
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>User information details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-4">
            <div>
              <Avatar className="ring-2 ring-gray-300 ring-offset-2">
                <AvatarImage
                  src={session.user.image ?? ""}
                  alt={`@${session.user.name}`}
                />
                <AvatarFallback>
                  <span
                    className={cn(
                      "inline-block h-full w-full overflow-hidden rounded-full",
                      "bg-gray-100"
                    )}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-full w-full text-gray-300"
                    >
                      {/* eslint-disable-next-line max-len */}
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1.5">
              <Label>Name</Label>
              <p
                className={cn(
                  "flex h-11 w-full items-center rounded-md px-4 py-2 text-sm",
                  "text-gray-800 ring-1 ring-inset ring-gray-300"
                )}
              >
                {session.user.name}
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <p
                className={cn(
                  "flex h-11 w-full items-center rounded-md px-4 py-2 text-sm",
                  "text-gray-800 ring-1 ring-inset ring-gray-300"
                )}
              >
                {session.user.email}
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
