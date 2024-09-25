import { migrate } from "drizzle-orm/postgres-js/migrator"

import config from "@/../drizzle.config"
import { env } from "@/env/server"

import { client, db } from "./connect"

if (!env.DB_MIGRATING) {
  throw new Error("You must set environment variable DB_MIGRATING to true.")
}

await migrate(db, { migrationsFolder: config.out! })
await client.end()
