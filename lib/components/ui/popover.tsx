"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/utils/cn";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "ef:bg-popover ef:text-popover-foreground ef:data-[state=open]:animate-in ef:data-[state=closed]:animate-out ef:data-[state=closed]:fade-out-0 ef:data-[state=open]:fade-in-0 ef:data-[state=closed]:zoom-out-95 ef:data-[state=open]:zoom-in-95 ef:data-[side=bottom]:slide-in-from-top-2 ef:data-[side=left]:slide-in-from-right-2 ef:data-[side=right]:slide-in-from-left-2 ef:data-[side=top]:slide-in-from-bottom-2 ef:z-50 ef:w-72 ef:origin-[--radix-popover-content-transform-origin] ef:rounded-md ef:border ef:p-4 ef:shadow-md ef:outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
