import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "ef:peer ef:data-[state=checked]:bg-primary ef:data-[state=unchecked]:bg-input ef:focus-visible:border-ring ef:focus-visible:ring-ring/50 ef:dark:data-[state=unchecked]:bg-input/80 ef:inline-flex ef:h-[1.15rem] ef:w-8 ef:shrink-0 ef:items-center ef:rounded-full ef:border ef:border-transparent ef:shadow-xs ef:transition-all ef:outline-none ef:focus-visible:ring-[3px] ef:disabled:cursor-not-allowed ef:disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "ef:bg-background ef:dark:data-[state=unchecked]:bg-foreground ef:dark:data-[state=checked]:bg-primary-foreground ef:pointer-events-none ef:block ef:size-4 ef:rounded-full ef:ring-0 ef:transition-transform ef:data-[state=checked]:translate-x-[calc(100%-2px)] ef:data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
