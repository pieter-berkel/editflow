import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "ef:inline-flex ef:items-center ef:justify-center ef:gap-2 ef:whitespace-nowrap ef:rounded-md ef:text-sm ef:font-medium ef:transition-all ef:disabled:pointer-events-none ef:disabled:opacity-50 ef:[&_svg]:pointer-events-none ef:[&_svg:not([class*=size-])]:size-4 ef:shrink-0 ef:[&_svg]:shrink-0 ef:outline-none ef:focus-visible:border-ring ef:focus-visible:ring-ring/50 ef:focus-visible:ring-[3px] ef:aria-invalid:ring-destructive/20 ef:dark:aria-invalid:ring-destructive/40 ef:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "ef:bg-primary ef:text-primary-foreground ef:shadow-xs ef:hover:bg-primary/90",
        destructive:
          "ef:bg-destructive ef:text-white ef:shadow-xs ef:hover:bg-destructive/90 ef:focus-visible:ring-destructive/20 ef:dark:focus-visible:ring-destructive/40 ef:dark:bg-destructive/60",
        outline:
          "ef:border ef:bg-background ef:shadow-xs ef:hover:bg-accent ef:hover:text-accent-foreground ef:dark:bg-input/30 ef:dark:border-input ef:dark:hover:bg-input/50",
        secondary:
          "ef:bg-secondary ef:text-secondary-foreground ef:shadow-xs ef:hover:bg-secondary/80",
        ghost:
          "ef:hover:bg-accent ef:hover:text-accent-foreground ef:dark:hover:bg-accent/50",
        link: "ef:text-primary ef:underline-offset-4 ef:hover:underline",
      },
      size: {
        default: "ef:h-9 ef:px-4 ef:py-2 ef:has-[>svg]:px-3",
        sm: "ef:h-8 ef:rounded-md ef:gap-1.5 ef:px-3 ef:has-[>svg]:px-2.5",
        lg: "ef:h-10 ef:rounded-md ef:px-6 ef:has-[>svg]:px-4",
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
