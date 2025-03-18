import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "ef:inline-flex ef:items-center ef:justify-center ef:gap-2 ef:whitespace-nowrap ef:rounded-md ef:text-sm ef:font-medium ef:transition-all disabled:ef:pointer-events-none disabled:ef:opacity-50 [&_svg]:ef:pointer-events-none [&_svg:not([class*=size-])]:ef:size-4 ef:shrink-0 [&_svg]:ef:shrink-0 ef:outline-none focus-visible:ef:border-ring focus-visible:ef:ring-ring/50 focus-visible:ef:ring-[3px] aria-invalid:ef:ring-destructive/20 dark:aria-invalid:ef:ring-destructive/40 aria-invalid:ef:border-destructive",
  {
    variants: {
      variant: {
        default:
          "ef:bg-primary ef:text-primary-foreground ef:shadow-xs hover:ef:bg-primary/90",
        destructive:
          "ef:bg-destructive ef:text-white ef:shadow-xs hover:ef:bg-destructive/90 focus-visible:ef:ring-destructive/20 dark:focus-visible:ef:ring-destructive/40 dark:ef:bg-destructive/60",
        outline:
          "ef:border ef:bg-background ef:shadow-xs hover:ef:bg-accent hover:ef:text-accent-foreground dark:ef:bg-input/30 dark:ef:border-input dark:hover:ef:bg-input/50",
        secondary:
          "ef:bg-secondary ef:text-secondary-foreground ef:shadow-xs hover:ef:bg-secondary/80",
        ghost:
          "hover:ef:bg-accent hover:ef:text-accent-foreground dark:hover:ef:bg-accent/50",
        link: "ef:text-primary ef:underline-offset-4 hover:ef:underline",
      },
      size: {
        default: "ef:h-9 ef:px-4 ef:py-2 has-[>svg]:ef:px-3",
        sm: "ef:h-8 ef:rounded-md ef:gap-1.5 ef:px-3 has-[>svg]:ef:px-2.5",
        lg: "ef:h-10 ef:rounded-md ef:px-6 has-[>svg]:ef:px-4",
        icon: "ef:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
