import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50">
        <Container className="pb-12 pt-10">
          <div>
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
            <div className="pt-4">
              <Button type="button" variant="primary">
                New Message
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
