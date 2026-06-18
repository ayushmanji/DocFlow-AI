import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useEffect } from "react";

function RichEditor({ content, onChange }) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                underline: false,
            }),
            Underline,
        ],

        content: content || "<p></p>",

        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        if (
            editor &&
            content !== undefined &&
            content !== editor.getHTML()
        ) {
            editor.commands.setContent(content, false);
        }
    }, [content, editor]);

    if (!editor) {
        return <div>Loading Editor...</div>;
    }

    return (
        <div className="bg-slate-900 rounded-lg p-4 min-h-[500px] border border-slate-700">
            {/* Toolbar */}
            <div className="flex gap-2 mb-4 border-b border-slate-700 pb-3">
                {/* Bold */}
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBold().run()
                    }
                    className={`px-3 py-1 rounded ${editor.isActive("bold")
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                >
                    B
                </button>

                {/* Italic */}
                <button
                    onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                    }
                    className={`px-3 py-1 rounded ${editor.isActive("italic")
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                >
                    I
                </button>

                {/* Underline */}
                <button
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleUnderline()
                            .run()
                    }
                    className={`px-3 py-1 rounded ${editor.isActive("underline")
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                >
                    U
                </button>

                {/* Heading */}
                <button
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run()
                    }
                    className={`px-3 py-1 rounded ${editor.isActive("heading", { level: 1 })
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                >
                    H1
                </button>

                {/* Bullet List */}
                <button
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBulletList()
                            .run()
                    }
                    className={`px-3 py-1 rounded ${editor.isActive("bulletList")
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                >
                    • List
                </button>

                {/* AI Button */}
                <button
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded"
                >
                    ✨ AI
                </button>
            </div>

            {/* Editor */}
            <EditorContent
                editor={editor}
                className="ProseMirror min-h-[450px] outline-none text-white"
            />
        </div>
    );
}

export default RichEditor;