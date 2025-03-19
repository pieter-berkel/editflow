import { useCallback } from "react";
import { LuChevronDown, LuHeading } from "react-icons/lu";
import type { Level } from "@tiptap/extension-heading";
import { Editor } from "@tiptap/react";

import { cn } from "@/utils/cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToolbarButton } from "./toolbar";

const formatActions: {
  label: string;
  element: keyof React.JSX.IntrinsicElements;
  level?: Level;
  className: string;
}[] = [
  {
    label: "Normal Text",
    element: "span",
    className: "grow",
  },
  {
    label: "Heading 1",
    element: "h1",
    level: 1,
    className: "m-0 grow text-3xl font-extrabold",
  },
  {
    label: "Heading 2",
    element: "h2",
    level: 2,
    className: "m-0 grow text-xl font-bold",
  },
  {
    label: "Heading 3",
    element: "h3",
    level: 3,
    className: "m-0 grow text-lg font-semibold",
  },
  {
    label: "Heading 4",
    element: "h4",
    level: 4,
    className: "m-0 grow text-base font-semibold",
  },
];

type Props = {
  editor: Editor;
};

export const ElementTool = ({ editor }: Props) => {
  const isActive = editor.isActive("heading");

  const handleFormatChange = useCallback(
    (level?: Level) => {
      if (level) {
        editor.chain().focus().toggleHeading({ level }).run();
      } else {
        editor.chain().focus().setParagraph().run();
      }
    },
    [editor],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          className="ef:data-[state=open]:bg-accent ef:w-12"
          pressed={isActive}
        >
          <LuHeading className="ef:size-5" />
          <LuChevronDown className="ef:size-5" />
        </ToolbarButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {formatActions.map(({ element: Element, ...action }) => (
          <DropdownMenuItem
            key={action.label}
            className={cn("prose", {
              "ef:bg-accent": action.level
                ? editor.isActive("heading", { level: action.level })
                : editor.isActive("paragraph"),
            })}
            onClick={() => handleFormatChange(action.level)}
          >
            <Element className={action.className}>{action.label}</Element>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
