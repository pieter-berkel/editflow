"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils/cn";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "ef:bg-border ef:shrink-0 ef:data-[orientation=horizontal]:h-px ef:data-[orientation=horizontal]:w-full ef:data-[orientation=vertical]:h-full ef:data-[orientation=vertical]:w-px ef:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
