import { createEnv } from "@t3-oss/env-nextjs"
import type { ZodError } from "zod"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    AUTH_SECRET: z.string().min(12),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    DB_HOST: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASS: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_PORT: z.coerce.number(),
    DATABASE_URL: z.string().url(),
    DB_MIGRATING: z
      .string()
      .refine(s => s === "true" || s === "false")
      .transform(s => s === "true")
      .optional(),
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
  skipValidation: process.env.SKIP_SERVER_ENV_VALIDATIONS === "true",
})
