import { createEnv } from "@t3-oss/env-nextjs"
import type { ZodError } from "zod"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid server environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },
  emptyStringAsUndefined: true,
  // This is the only file where we allow to access `process.env`
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  // This is the only file where we allow to access `process.env`
  // eslint-disable-next-line n/no-process-env
  skipValidation: process.env.SKIP_ENV_VALIDATIONS === "true",
})
