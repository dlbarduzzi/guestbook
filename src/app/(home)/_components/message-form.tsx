"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"

import { cn, delay } from "@/lib/utils"

import type { CreateMessageSchema } from "@/db/schema/guestbooks"
import { createMessageSchema } from "@/db/schema/guestbooks"

import { createMessage } from "../_actions/create-message"

type MessageFormProps = {
  setShowForm: (show: boolean) => void
}

export function MessageForm({ setShowForm }: MessageFormProps) {
  const form = useForm<CreateMessageSchema>({
    resolver: zodResolver(createMessageSchema),
    defaultValues: {
      message: "",
    },
  })

  const { isSubmitting, errors } = form.formState

  async function closeForm() {
    setShowForm(false)
    await delay(300)
    form.reset()
  }

  async function onSubmit(data: CreateMessageSchema) {
    const resp = await createMessage(data)
    if (resp && !resp.ok) {
      resp.errors.map(error => {
        if (error.path === "message") {
          form.setError("message", { message: error.message })
        }
      })
      return
    }

    await closeForm()
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1"
        >
          <div className="col-span-full">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <div className="pb-2 pt-1">
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isSubmitting}
                        placeholder="Leave a welcoming message..."
                        className="bg-gray-50"
                        variant={!!errors.message ? "danger" : "default"}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-full pt-2">
            <div className="flex items-center justify-end gap-x-3">
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={async () => {
                  await closeForm()
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative"
                variant="primary"
              >
                {isSubmitting ? (
                  <span
                    className={cn(
                      "absolute inset-0 flex items-center justify-center"
                    )}
                  >
                    <Spinner
                      size="xs"
                      className="border-white border-r-indigo-500"
                    />
                  </span>
                ) : null}
                <span className={cn(isSubmitting ? "invisible" : "")}>
                  Post message
                </span>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
