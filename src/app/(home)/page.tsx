import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="bg-white">
      <Container className="py-8">
        <div className="max-w-2xl pt-4">
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-wide text-gray-900",
              "sm:text-4xl"
            )}
          >
            Guestbook
          </h2>
          <p className="mt-1.5 leading-6 text-gray-600">
            Share your welcome and spread positivity,
            <br className="sm:hidden" />
            <span className="hidden sm:inline">&nbsp;</span>
            one message at a time!
          </p>
        </div>
      </Container>
    </div>
  )
}
