import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md
  text-sm font-semibold transition-colors focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2
  disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        default: `bg-gray-200 text-gray-900 hover:bg-gray-300
          focus-visible:outline-gray-900 disabled:text-gray-400`,
        primary: `bg-indigo-600 text-white hover:bg-indigo-500
          focus-visible:outline-indigo-600 disabled:bg-indigo-400`,
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
