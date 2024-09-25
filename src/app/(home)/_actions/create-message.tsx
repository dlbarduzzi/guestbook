"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { ZodIssue } from "zod"

import { auth } from "@/config/auth"
import { db } from "@/db/connect"
import type { CreateMessageSchema } from "@/db/schema/guestbooks"
import { createMessageSchema, guestbooks } from "@/db/schema/guestbooks"

export async function createMessage(data: CreateMessageSchema) {
  const session = await auth()
  if (!session || !session.user) {
    redirect("/login")
  }

  const result = createMessageSchema.safeParse(data)
  if (!result.success) {
    const errors = parseZodIssues(result.error.issues)
    return { ok: false, errors }
  }

  await db.insert(guestbooks).values({
    userId: session.user.id,
    message: result.data.message,
  })

  revalidatePath("/")
  redirect("/")
}

function parseZodIssues(issues: ZodIssue[]) {
  const errors: { path: string; message: string }[] = []

  issues.map(issue => {
    errors.push({ path: issue.path[0].toString(), message: issue.message })
  })

  return errors
}
