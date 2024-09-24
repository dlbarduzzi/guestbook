import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { auth } from "@/config/auth"

export default async function Home() {
  const session = await auth()
  const isAuthenticated = !!(session && session.user)
  return (
    <div className="bg-white">
      <div className="bg-gray-50">
        <Container className="max-w-5xl pb-12 pt-10">
          <div className="md:flex md:items-start md:justify-between md:gap-x-6">
            <div>
              <h2
                className={cn(
                  "font-heading text-3xl font-bold tracking-wide text-gray-900",
                  "sm:text-4xl"
                )}
              >
                Guestbook
              </h2>
              <p
                className={cn(
                  "mt-1.5 text-sm leading-6 text-gray-600 sm:text-base"
                )}
              >
                Share your welcome and spread positivity,
                <br className="sm:hidden" />
                <span className="hidden sm:inline">&nbsp;</span>
                one message at a time!
              </p>
            </div>
            {isAuthenticated ? (
              <div className="pt-4 md:pt-0">
                <Button type="button" variant="primary">
                  New Message
                </Button>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </div>
  )
}
