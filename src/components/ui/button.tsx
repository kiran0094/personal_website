import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        spidey: [
          "bg-primary text-primary-foreground font-semibold",
          "shadow-[0_0_20px_hsl(var(--spidey-red)/0.3)]",
          "hover:shadow-[0_0_30px_hsl(var(--spidey-red)/0.5),0_0_60px_hsl(var(--spidey-red)/0.2)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
        "spidey-outline": [
          "border border-primary/50 bg-transparent text-primary font-semibold",
          "hover:bg-primary/10 hover:border-primary",
          "hover:shadow-[0_0_20px_hsl(var(--spidey-red)/0.2)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
        "spidey-blue": [
          "bg-secondary text-secondary-foreground font-semibold",
          "shadow-[0_0_20px_hsl(var(--spidey-blue)/0.3)]",
          "hover:shadow-[0_0_30px_hsl(var(--spidey-blue-glow)/0.5)]",
          "hover:scale-105 active:scale-95",
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
