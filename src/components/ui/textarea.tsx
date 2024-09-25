import * as React from "react"

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  `flex min-h-[6rem] w-full items-center rounded-md border-0 bg-white px-4
  py-2 text-sm text-gray-800 ring-1 ring-inset placeholder:text-gray-400
  focus:outline-none focus:ring-2 focus:ring-inset disabled:cursor-not-allowed
  disabled:bg-gray-50 disabled:text-gray-400 disabled:ring-gray-200`,
  {
    variants: {
      variant: {
        default: "ring-gray-300 focus:ring-blue-500",
        danger: "ring-red-500 focus:ring-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
