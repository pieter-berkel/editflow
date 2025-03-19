import { clsx, type ClassValue } from "clsx";

import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  prefix: "ef",
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
