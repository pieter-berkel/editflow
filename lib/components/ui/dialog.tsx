"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";
import { LuX } from "react-icons/lu";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "ef:data-[state=open]:animate-in ef:data-[state=closed]:animate-out ef:data-[state=closed]:fade-out-0 ef:data-[state=open]:fade-in-0 ef:fixed ef:inset-0 ef:z-50 ef:bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "ef:bg-background ef:data-[state=open]:animate-in ef:data-[state=closed]:animate-out ef:data-[state=closed]:fade-out-0 ef:data-[state=open]:fade-in-0 ef:data-[state=closed]:zoom-out-95 ef:data-[state=open]:zoom-in-95 ef:fixed ef:top-[50%] ef:left-[50%] ef:z-50 ef:grid ef:w-full ef:max-w-[calc(100%-2rem)] ef:translate-x-[-50%] ef:translate-y-[-50%] ef:gap-4 ef:rounded-lg ef:border ef:p-6 ef:shadow-lg ef:duration-200 ef:sm:max-w-lg",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ef:ring-offset-background ef:focus:ring-ring ef:data-[state=open]:bg-accent ef:data-[state=open]:text-muted-foreground ef:absolute ef:top-4 ef:right-4 ef:rounded-xs ef:opacity-70 ef:transition-opacity ef:hover:opacity-100 ef:focus:ring-2 ef:focus:ring-offset-2 ef:focus:outline-hidden ef:disabled:pointer-events-none ef:[&_svg]:pointer-events-none ef:[&_svg]:shrink-0 ef:[&_svg:not([class*=size-])]:size-4">
          <LuX />
          <span className="ef:sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "ef:flex ef:flex-col ef:gap-2 ef:text-center ef:sm:text-left",
        className,
      )}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "ef:flex ef:flex-col-reverse ef:gap-2 ef:sm:flex-row ef:sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("ef:text-lg ef:leading-none ef:font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("ef:text-muted-foreground ef:text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
