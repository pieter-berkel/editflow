import { Content, EditorContent } from "@tiptap/react";

import { cn } from "@/utils/cn";

import {
  useRichTextEditor,
  UseRichTextEditorOptions,
} from "../hooks/use-rich-text-editor";
import { Toolbar } from "./toolbar";

interface RichTextEditorProps extends UseRichTextEditorOptions {
  value?: Content;
  onChange?: (value: Content) => void;
  className?: string;
  editorContentClassName?: string;
}

export const RichTextEditor = ({
  value,
  onChange,
  className,
  editorClassName,
  editorContentClassName,
  ...props
}: RichTextEditorProps) => {
  const editor = useRichTextEditor({
    value,
    onUpdate: onChange,
    editorClassName: cn("ef:flex-1 ef:px-3 ef:py-1", editorClassName),
    ...props,
  });

  if (!editor) {
    return null;
  }

  return (
    <div
      className={cn(
        "ef:border-input ef:focus-within:border-primary ef:flex ef:h-auto ef:min-h-72 ef:w-full ef:flex-col ef:rounded-md ef:border ef:shadow-sm",
        className,
      )}
    >
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className={cn(
          "editflow prose ef:flex ef:flex-1",
          editorContentClassName,
        )}
      />
    </div>
  );
};
