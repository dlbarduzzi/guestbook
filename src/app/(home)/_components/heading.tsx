"use client"

import { useState } from "react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

import { cn } from "@/lib/utils"

import { MessageForm } from "./message-form"

type HeadingProps = {
  isAuthenticated: boolean
}

export function Heading({ isAuthenticated }: HeadingProps) {
  const [showForm, setShowForm] = useState(false)
  return (
    <Collapsible open={showForm} onOpenChange={setShowForm}>
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
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => setShowForm(true)}
                >
                  New Message
                </Button>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
      <CollapsibleContent>
        <div className="border-t border-t-gray-200 bg-gray-50 py-8">
          <Container className="relative max-w-5xl">
            <MessageForm setShowForm={setShowForm} />
          </Container>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
