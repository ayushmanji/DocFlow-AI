import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RichEditor from "../components/RichEditor";
import {
    ArrowLeft,
    FileText,
    Upload,
    Share2,
} from "lucide-react";

function Editor() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState(true);

    const [shareEmail, setShareEmail] =
        useState("");

    const [sharedUsers, setSharedUsers] =
        useState([]);

    useEffect(() => {
        loadDocument();
    }, [id]);

    const loadDocument = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/api/documents/${id}`
            );

            setContent(
                res.data.content || ""
            );

            setTitle(
                res.data.title || ""
            );

            setSharedUsers(
                res.data.sharedWith || []
            );
        } catch (err) {
            console.log(err);
        }
    };

    const saveDocument = async (
        newContent = content,
        newTitle = title
    ) => {
        try {
            setSaved(false);

            await axios.put(
                `http://localhost:8080/api/documents/${id}`,
                {
                    content: newContent,
                    title: newTitle,
                }
            );

            setSaved(true);
        } catch (err) {
            console.log(err);
            setSaved(true);
        }
    };

    const handleTitleChange = (e) => {
        const value = e.target.value;

        setTitle(value);
        saveDocument(content, value);
    };

    const handleEditorChange = (value) => {
        setContent(value);
        saveDocument(value, title);
    };

    const shareDocument = async () => {
        if (!shareEmail.trim()) {
            alert("Please enter an email");
            return;
        }

        try {
            const res = await axios.post(
                `http://localhost:8080/api/documents/${id}/share`,
                {
                    email: shareEmail,
                }
            );

            setSharedUsers(
                res.data.sharedWith || []
            );

            alert(
                `Document shared with ${shareEmail}`
            );

            setShareEmail("");
        } catch (err) {
            console.log(err);
            alert("Failed to share document");
        }
    };

    const uploadFile = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const formData =
            new FormData();

        formData.append(
            "file",
            file
        );

        try {
            await axios.post(
                "http://localhost:8080/api/upload",
                formData
            );

            console.log(
                `${file.name} uploaded successfully`
            );

            alert(
                "File uploaded successfully"
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-12 py-10">

            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">

                <button
                    onClick={() =>
                        navigate("/")
                    }
                    className="
                        flex
                        items-center
                        gap-2
                        text-slate-400
                        hover:text-white
                        transition
                    "
                >
                    <ArrowLeft size={18} />
                    Back to Documents
                </button>

                <div className="flex items-center gap-2">

                    <div
                        className={`w-2 h-2 rounded-full ${saved
                                ? "bg-green-400"
                                : "bg-yellow-400"
                            }`}
                    />

                    <span
                        className={`text-sm font-medium ${saved
                                ? "text-green-400"
                                : "text-yellow-400"
                            }`}
                    >
                        {saved
                            ? "Saved"
                            : "Saving..."}
                    </span>

                </div>

            </div>

            {/* Header */}
            <div className="mb-10">

                <div className="flex items-center gap-4">

                    <FileText
                        size={42}
                        className="text-slate-500"
                    />

                    <input
                        type="text"
                        value={title}
                        onChange={
                            handleTitleChange
                        }
                        placeholder="Untitled Document"
                        className="
                            w-full
                            bg-transparent
                            outline-none
                            border-none
                            text-7xl
                            font-bold
                            text-white
                            placeholder:text-slate-600
                        "
                    />

                </div>

                <p className="text-slate-500 text-sm mt-3 ml-14">
                    AI Native Document Workspace
                </p>

                <p className="text-slate-400 text-sm mt-1 ml-14">
                    Owner: ayushman@gmail.com
                </p>

            </div>

            {/* Share + Upload */}
            <div className="flex flex-wrap gap-4 mb-6">

                <div className="flex gap-2">

                    <input
                        type="email"
                        value={shareEmail}
                        onChange={(e) =>
                            setShareEmail(
                                e.target.value
                            )
                        }
                        placeholder="Share with email"
                        className="
                            px-4
                            py-2
                            bg-slate-900
                            border
                            border-slate-700
                            rounded-lg
                            text-white
                        "
                    />

                    <button
                        onClick={
                            shareDocument
                        }
                        className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            bg-blue-600
                            hover:bg-blue-700
                            rounded-lg
                        "
                    >
                        <Share2 size={16} />
                        Share
                    </button>

                </div>

                <label
                    className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        bg-slate-900
                        border
                        border-slate-700
                        rounded-lg
                        cursor-pointer
                    "
                >
                    <Upload size={16} />

                    Upload File

                    <input
                        type="file"
                        onChange={uploadFile}
                        className="hidden"
                    />
                </label>

            </div>

            {/* Shared Users */}
            {sharedUsers.length > 0 && (
                <div className="mb-6">

                    <h3 className="text-slate-400 mb-2">
                        Shared With ({sharedUsers.length})
                    </h3>

                    <div className="flex flex-wrap gap-2">

                        {sharedUsers.map(
                            (
                                user,
                                index
                            ) => (
                                <span
                                    key={index}
                                    className="
                                        px-3
                                        py-1
                                        bg-slate-800
                                        rounded-full
                                        text-sm
                                    "
                                >
                                    {user}
                                </span>
                            )
                        )}

                    </div>

                </div>
            )}

            {/* Editor */}
            <RichEditor
                content={content}
                onChange={
                    handleEditorChange
                }
            />

        </div>
    );
}

export default Editor;