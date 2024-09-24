"use client"

import Link from "next/link"

import { IconMenu, IconX } from "@tabler/icons-react"
import { useSession } from "next-auth/react"

import { AuthButton } from "@/components/auth/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

import { Container } from "./container"
import { Logo } from "./logo"

export function Navbar() {
  const { status } = useSession()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/" },
  ]

  if (status === "authenticated") {
    navigation.push({ name: "Profile", href: "/profile" })
  }

  return (
    <nav className="border-b border-b-gray-200 bg-white">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile navigation */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "-mx-1.5 flex items-center rounded-md bg-white p-1.5",
                    "text-gray-900 transition-colors hover:bg-gray-200",
                    "hover:text-gray-950 focus-visible:outline",
                    "focus-visible:outline-2 focus-visible:outline-offset-0",
                    "focus-visible:outline-gray-900"
                  )}
                >
                  <IconMenu className="size-6" aria-hidden="true" />
                  <span className="sr-only">Open mobile navbar</span>
                </button>
              </SheetTrigger>
              <SheetPortal>
                <SheetOverlay />
                <SheetContent side="left">
                  <SheetHeader
                    className={cn(
                      "flex items-center justify-between gap-x-4 px-4 py-5"
                    )}
                  >
                    <SheetTitle className="sr-only">Mobile navbar</SheetTitle>
                    <SheetDescription className="sr-only">
                      Mobile navbar
                    </SheetDescription>
                    <div>
                      <Logo />
                      <span className="sr-only">Logo brand</span>
                    </div>
                    <div className="inline-flex items-center">
                      <SheetClose
                        className={cn(
                          "flex items-center rounded-md bg-white px-1",
                          "py-1 text-gray-600 transition-colors",
                          "hover:bg-gray-200 hover:text-gray-900",
                          "focus-visible:outline",
                          "focus-visible:outline-2",
                          "focus-visible:outline-offset-0",
                          "focus-visible:outline-gray-900"
                        )}
                      >
                        <IconX className="size-5" aria-hidden="true" />
                        <span className="sr-only">Close mobile navbar</span>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <Separator />
                  <div className="px-4 py-4">
                    <div className="flex flex-col space-y-2">
                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "rounded-md bg-white px-3 py-3 text-sm",
                            "font-medium text-gray-900 transition-colors",
                            "hover:bg-gray-100 hover:text-gray-950",
                            "focus-visible:outline-2",
                            "focus-visible:outline-offset-0",
                            "focus-visible:outline-gray-900"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </SheetContent>
              </SheetPortal>
            </Sheet>
          </div>
          <div
            className={cn(
              "flex flex-1 items-center justify-center",
              "sm:items-stretch sm:justify-start"
            )}
          >
            <div className="flex flex-shrink-0 items-center">
              <Link
                href="/"
                className={cn(
                  "rounded-md focus-visible:outline",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-2",
                  "focus-visible:outline-gray-900"
                )}
              >
                <Logo />
                <span className="sr-only">Logo brand</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex items-center space-x-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "rounded-md bg-white px-3 py-2 text-sm font-medium",
                      "text-gray-900 transition-colors hover:bg-gray-200",
                      "hover:text-gray-950 focus-visible:outline-2",
                      "focus-visible:outline-offset-0",
                      "focus-visible:outline-gray-900"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <AuthButton />
          </div>
        </div>
      </Container>
    </nav>
  )
}
