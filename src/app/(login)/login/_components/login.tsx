"use client"

import { signIn } from "next-auth/react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Login() {
  return (
    <div className="bg-white">
      <Container className="py-8">
        <Card className="mx-auto max-w-xs">
          <CardHeader className="flex flex-col items-center gap-y-4">
            <span className="text-4xl">🔐</span>
            <CardTitle className="text-sm font-normal text-gray-900">
              Please sign in before you continue!
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <Button
              type="button"
              variant="primary"
              className="w-full"
              onClick={() => signIn("google", { redirectTo: "/profile" })}
            >
              Sign in
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
