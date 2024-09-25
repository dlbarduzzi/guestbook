import { Container } from "@/components/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"

import { auth } from "@/config/auth"
import { db } from "@/db/connect"

import { Heading } from "./_components/heading"

export default async function Home() {
  const session = await auth()
  const isAuthenticated = !!(session && session.user)

  const entries = await db.query.guestbooks.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt)
    },
    with: { user: true },
  })

  return (
    <div className="bg-white">
      <Heading isAuthenticated={isAuthenticated} />
      <Container className="max-w-5xl py-8">
        <div className="space-y-6">
          {entries.map(entry => (
            <div
              key={entry.id}
              className={cn(
                "rounded-md border border-gray-200 bg-white px-4 py-5 sm:px-6"
              )}
            >
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <Avatar className="ring-2 ring-gray-300 ring-offset-2">
                    <AvatarImage
                      src={entry.user.image}
                      alt={`@${entry.user.name}`}
                    />
                    <AvatarFallback>
                      <span
                        className={cn(
                          "inline-block h-full w-full overflow-hidden",
                          "rounded-full bg-gray-100"
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
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {entry.user.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDatetime(entry.createdAt)}
                  </p>
                </div>
              </div>
              <div className="pt-7">
                <p className="text-sm leading-6 text-gray-500">
                  {entry.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

const datetimeOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}

function formatDatetime(d: Date) {
  return new Date(d).toLocaleDateString("en-US", datetimeOptions)
}
