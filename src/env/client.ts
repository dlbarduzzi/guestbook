import { createEnv } from "@t3-oss/env-nextjs"
import type { ZodError } from "zod"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid client environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    // This is the only file where we allow to access `process.env`
    // eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
})
