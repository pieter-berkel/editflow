import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/utils/cn";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "ef:flex ef:items-center ef:gap-2 ef:text-sm ef:leading-none ef:font-medium ef:select-none ef:group-data-[disabled=true]:pointer-events-none ef:group-data-[disabled=true]:opacity-50 ef:peer-disabled:cursor-not-allowed ef:peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
