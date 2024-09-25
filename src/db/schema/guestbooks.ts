import { relations } from "drizzle-orm"
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

import { users } from "./users"

export const guestbooks = pgTable("guestbook", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
})

export const guestbookRelations = relations(guestbooks, ({ one }) => ({
  user: one(users, {
    fields: [guestbooks.userId],
    references: [users.id],
  }),
}))

export const createMessageSchema = createInsertSchema(guestbooks, {
  message: schema =>
    schema.message.min(1, { message: "Message is required." }).min(2, {
      message: "Message must be at least 2 characters long.",
    }),
}).omit({
  id: true,
  userId: true,
  createdAt: true,
})

export type CreateMessageSchema = z.infer<typeof createMessageSchema>
