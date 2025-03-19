import * as React from "react";

import { cn } from "@/utils/cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "ef:file:text-foreground ef:placeholder:text-muted-foreground ef:selection:bg-primary ef:selection:text-primary-foreground ef:dark:bg-input/30 ef:border-input ef:flex ef:h-9 ef:w-full ef:min-w-0 ef:rounded-md ef:border ef:bg-transparent ef:px-3 ef:py-1 ef:text-base ef:shadow-xs ef:transition-[color,box-shadow] ef:outline-none ef:file:inline-flex ef:file:h-7 ef:file:border-0 ef:file:bg-transparent ef:file:text-sm ef:file:font-medium ef:disabled:pointer-events-none ef:disabled:cursor-not-allowed ef:disabled:opacity-50 ef:md:text-sm",
        "ef:focus-visible:border-ring ef:focus-visible:ring-ring/50 ef:focus-visible:ring-[3px]",
        "ef:aria-invalid:ring-destructive/20 ef:dark:aria-invalid:ring-destructive/40 ef:aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
