import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const toggleVariants = cva(
  "ef:inline-flex ef:items-center ef:justify-center ef:gap-2 ef:rounded-md ef:text-sm ef:font-medium ef:hover:bg-muted ef:hover:text-muted-foreground ef:disabled:pointer-events-none ef:disabled:opacity-50 ef:data-[state=on]:bg-accent ef:data-[state=on]:text-accent-foreground ef:[&_svg]:pointer-events-none ef:[&_svg:not([class*=size-])]:size-4 ef:[&_svg]:shrink-0 ef:focus-visible:border-ring ef:focus-visible:ring-ring/50 ef:focus-visible:ring-[3px] ef:outline-none ef:transition-[color,box-shadow] ef:aria-invalid:ring-destructive/20 ef:dark:aria-invalid:ring-destructive/40 ef:aria-invalid:border-destructive ef:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "ef:bg-transparent",
        outline:
          "ef:border ef:border-input ef:bg-transparent ef:shadow-xs ef:hover:bg-accent ef:hover:text-accent-foreground",
      },
      size: {
        default: "ef:h-9 ef:px-2 ef:min-w-9",
        sm: "ef:h-8 ef:px-1.5 ef:min-w-8",
        lg: "ef:h-10 ef:px-2.5 ef:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
