import { useMemo } from "react";
import { LuEllipsis } from "react-icons/lu";
import { Editor } from "@tiptap/react";

import { cn } from "@/utils/cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

import { FormatAction } from "@/types";
import { ColorTool } from "./color-tool";
import { ElementTool } from "./element-tool";
import { FormatTool } from "./format-tool";
import { InsertTool } from "./insert-tool";
import { LinkTool } from "./link-tool";
import { ListTool } from "./list-tool";

export const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="ef:border-border ef:shrink-0 ef:overflow-x-auto ef:border-b ef:p-2">
      <div className="ef:flex ef:w-max ef:items-center ef:gap-px">
        <ElementTool editor={editor} />
        <Separator orientation="vertical" className="ef:mx-2 ef:!h-7" />
        <FormatTool editor={editor} />
        <Separator orientation="vertical" className="ef:mx-2 ef:!h-7" />
        <ColorTool editor={editor} />
        <Separator orientation="vertical" className="ef:mx-2 ef:!h-7" />
        <ListTool editor={editor} />
        <Separator orientation="vertical" className="ef:mx-2 ef:!h-7" />
        <LinkTool editor={editor} />
        <InsertTool editor={editor} />
      </div>
    </div>
  );
};

interface ToolbarSectionProps {
  editor: Editor;
  actions: FormatAction[];
  mainActionCount?: number;
}

export const ToolbarSection = ({
  editor,
  actions,
  mainActionCount = 0,
}: ToolbarSectionProps) => {
  const { mainActions, dropdownActions } = useMemo(() => {
    return {
      mainActions: actions.slice(0, mainActionCount),
      dropdownActions: actions.slice(mainActionCount),
    };
  }, [actions, mainActionCount]);

  const isDropdownActive = useMemo(() => {
    return dropdownActions.some((action) => action.isActive(editor));
  }, [dropdownActions, editor]);

  return (
    <>
      {mainActions.map((action) => (
        <ToolbarButton
          key={action.label}
          onClick={() => action.action(editor)}
          disabled={!action.canExecute(editor)}
          pressed={action.isActive(editor)}
        >
          <action.icon className="ef:size-5" />
        </ToolbarButton>
      ))}
      {dropdownActions.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ToolbarButton pressed={isDropdownActive}>
              <LuEllipsis className="ef:size-5" />
            </ToolbarButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {dropdownActions.map((action) => (
              <DropdownMenuItem
                key={action.label}
                className={cn("ef:flex ef:flex-row ef:items-center ef:gap-2", {
                  "ef:bg-accent": action.isActive(editor),
                })}
                onClick={() => action.action(editor)}
                disabled={!action.canExecute(editor)}
              >
                <action.icon className="ef:size-4" />
                <span>{action.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export const ToolbarButton = ({
  className,
  ...props
}: React.ComponentProps<typeof Toggle>) => {
  return (
    <Toggle
      size="sm"
      className={cn(
        "data-[state=on]:bg-accent ef:size-8 ef:p-0",
        { "ef:bg-accent": props.pressed },
        className,
      )}
      {...props}
    />
  );
};
