import { useCallback, useEffect, useState } from "react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { Editor } from "@tiptap/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { ToolbarButton } from "./toolbar";

interface ColorItem {
  cssVar: string;
}

interface ColorPalette {
  colors: ColorItem[];
  inverse: string;
}

const PALETTES: ColorPalette[] = [
  {
    inverse: "var(--background)",
    colors: [
      { cssVar: "var(--foreground)" },
      { cssVar: "var(--secondary-foreground)" },
      { cssVar: "var(--muted-foreground)" },
      { cssVar: "var(--accent-foreground)" },
      { cssVar: "var(--destructive-foreground)" },
    ],
  },

  {
    inverse: "var(--foreground)",
    colors: [
      { cssVar: "var(--background)" },
      { cssVar: "var(--secondary)" },
      { cssVar: "var(--muted)" },
      { cssVar: "var(--accent)" },
      { cssVar: "var(--destructive)" },
    ],
  },
];

export const ColorTool = ({ editor }: { editor: Editor }) => {
  const color =
    editor.getAttributes("textStyle")?.color || "hsl(var(--foreground))";
  const [selectedColor, setSelectedColor] = useState(color);

  useEffect(() => {
    setSelectedColor(color);
  }, [color]);

  const handleColorChange = useCallback(
    (value: string) => {
      setSelectedColor(value);
      editor.chain().focus().setColor(value).run();
    },
    [editor],
  );

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <ToolbarButton className="ef:w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            style={{ color: selectedColor }}
          >
            <path d="M4 20h16" />
            <path d="m6 16 6-12 6 12" />
            <path d="M8 12h8" />
          </svg>
          <LuChevronDown className="ef:size-5" />
        </ToolbarButton>
      </PopoverTrigger>
      <PopoverContent align="start" className="ef:w-full">
        <ToggleGroup
          type="single"
          value={selectedColor}
          onValueChange={handleColorChange}
          className="ef:flex-col ef:gap-1.5"
        >
          {PALETTES.map((pallete, i) => (
            <div key={i} className="ef:flex ef:gap-1.5">
              {pallete.colors.map((color, j) => (
                <ToggleGroupItem
                  tabIndex={0}
                  key={j}
                  className="ef:relative ef:size-7 ef:rounded-md ef:border ef:p-0"
                  value={color.cssVar}
                  style={{ backgroundColor: color.cssVar }}
                >
                  {selectedColor === color.cssVar && (
                    <LuCheck
                      className="ef:absolute ef:inset-0 ef:m-auto ef:size-6"
                      style={{ color: pallete.inverse }}
                    />
                  )}
                </ToggleGroupItem>
              ))}
            </div>
          ))}
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
};
