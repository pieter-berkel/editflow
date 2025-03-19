import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils/cn";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "ef:bg-popover ef:text-popover-foreground ef:data-[state=open]:animate-in ef:data-[state=closed]:animate-out ef:data-[state=closed]:fade-out-0 ef:data-[state=open]:fade-in-0 ef:data-[state=closed]:zoom-out-95 ef:data-[state=open]:zoom-in-95 ef:data-[side=bottom]:slide-in-from-top-2 ef:data-[side=left]:slide-in-from-right-2 ef:data-[side=right]:slide-in-from-left-2 ef:data-[side=top]:slide-in-from-bottom-2 ef:z-50 ef:max-h-[--radix-dropdown-menu-content-available-height] ef:min-w-[8rem] ef:origin-[--radix-dropdown-menu-content-transform-origin] ef:overflow-x-hidden ef:overflow-y-auto ef:rounded-md ef:border ef:p-1 ef:shadow-md",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "ef:focus:bg-accent ef:focus:text-accent-foreground ef:data-[variant=destructive]:text-destructive ef:data-[variant=destructive]:focus:bg-destructive/10 ef:dark:data-[variant=destructive]:focus:bg-destructive/20 ef:data-[variant=destructive]:focus:text-destructive ef:data-[variant=destructive]:*:[svg]:!text-destructive ef:[&_svg:not([class*=text-])]:text-muted-foreground ef:relative ef:flex ef:cursor-default ef:items-center ef:gap-2 ef:rounded-sm ef:px-2 ef:py-1.5 ef:text-sm ef:outline-hidden ef:select-none ef:data-[disabled]:pointer-events-none ef:data-[disabled]:opacity-50 ef:data-[inset]:pl-8 ef:[&_svg]:pointer-events-none ef:[&_svg]:shrink-0 ef:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "ef:focus:bg-accent ef:focus:text-accent-foreground ef:relative ef:flex ef:cursor-default ef:items-center ef:gap-2 ef:rounded-sm ef:py-1.5 ef:pr-2 ef:pl-8 ef:text-sm ef:outline-hidden ef:select-none ef:data-[disabled]:pointer-events-none ef:data-[disabled]:opacity-50 ef:[&_svg]:pointer-events-none ef:[&_svg]:shrink-0 ef:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="ef:pointer-events-none ef:absolute ef:left-2 ef:flex ef:size-3.5 ef:items-center ef:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCheck className="ef:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "ef:focus:bg-accent ef:focus:text-accent-foreground ef:relative ef:flex ef:cursor-default ef:items-center ef:gap-2 ef:rounded-sm ef:py-1.5 ef:pr-2 ef:pl-8 ef:text-sm ef:outline-hidden ef:select-none ef:data-[disabled]:pointer-events-none ef:data-[disabled]:opacity-50 ef:[&_svg]:pointer-events-none ef:[&_svg]:shrink-0 ef:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="ef:pointer-events-none ef:absolute ef:left-2 ef:flex ef:size-3.5 ef:items-center ef:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCircle className="ef:size-2 ef:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "ef:px-2 ef:py-1.5 ef:text-sm ef:font-medium ef:data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("ef:bg-border ef:-mx-1 ef:my-1 ef:h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ef:text-muted-foreground ef:ml-auto ef:text-xs ef:tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "ef:focus:bg-accent ef:focus:text-accent-foreground ef:data-[state=open]:bg-accent ef:data-[state=open]:text-accent-foreground ef:flex ef:cursor-default ef:items-center ef:rounded-sm ef:px-2 ef:py-1.5 ef:text-sm ef:outline-hidden ef:select-none ef:data-[inset]:pl-8",
        className,
      )}
      {...props}
    >
      {children}
      <LuChevronRight className="ef:ml-auto ef:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "ef:bg-popover ef:text-popover-foreground ef:data-[state=open]:animate-in ef:data-[state=closed]:animate-out ef:data-[state=closed]:fade-out-0 ef:data-[state=open]:fade-in-0 ef:data-[state=closed]:zoom-out-95 ef:data-[state=open]:zoom-in-95 ef:data-[side=bottom]:slide-in-from-top-2 ef:data-[side=left]:slide-in-from-right-2 ef:data-[side=right]:slide-in-from-left-2 ef:data-[side=top]:slide-in-from-bottom-2 ef:z-50 ef:min-w-[8rem] ef:origin-[--radix-dropdown-menu-content-transform-origin] ef:overflow-hidden ef:rounded-md ef:border ef:p-1 ef:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
