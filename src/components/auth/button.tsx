"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Spinner } from "@/components/ui/spinner"

import { cn } from "@/lib/utils"

export function AuthButton() {
  const { data, status } = useSession()

  if (status === "loading") {
    return <Spinner className="size-10 border-4" />
  }

  if (status === "unauthenticated") {
    return (
      <Button
        type="button"
        onClick={() => signIn("google", { redirectTo: "/profile" })}
      >
        Sign in
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group focus-visible:outline-none">
        <Avatar
          className={cn(
            "ring-2 ring-gray-300 ring-offset-2",
            "group-focus-visible:ring-gray-900"
          )}
        >
          <AvatarImage
            src={data?.user?.image ?? ""}
            alt={`@${data?.user?.name}`}
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
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex flex-col items-start gap-y-1"
            onClick={e => e.preventDefault()}
          >
            <span className="text-xs font-semibold text-gray-800">
              Signed in as
            </span>
            <span className="w-full truncate">{data?.user?.email}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => signOut({ redirectTo: "/" })}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
