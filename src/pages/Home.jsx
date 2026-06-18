import { useState, useEffect } from "react";
import axios from "axios";
import { FaFileAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    // Demo Current User
    const CURRENT_USER = "sharmaayushmansharma@gmail.com";

    // Document Owner
    const OWNER_EMAIL = "ayushman@gmail.com";

    const fetchDocuments = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8080/api/documents"
            );

            setDocuments(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const createDocument = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/api/documents",
                {
                    title: `Document ${Date.now()}`,
                }
            );

            navigate(`/document/${res.data._id}`);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    // Documents owned by Ayushman
    const ownedDocuments = documents.filter(
        (doc) => doc.owner === OWNER_EMAIL
    );

    // Documents shared WITH current user but NOT owned by current user
    const sharedDocuments = documents.filter(
        (doc) =>
            doc.sharedWith?.includes(CURRENT_USER) &&
            doc.owner !== CURRENT_USER
    );

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800">
                <h1 className="text-2xl font-bold">
                    🚀 DocFlow AI
                </h1>

                <button
                    onClick={createDocument}
                    className="
                        bg-blue-600
                        hover:bg-blue-700
                        px-5
                        py-2
                        rounded-lg
                        transition
                    "
                >
                    New Document
                </button>
            </nav>

            {/* Hero */}
            <section className="text-center py-20">
                <h2 className="text-6xl font-bold mb-4">
                    AI Native Document Workspace
                </h2>

                <p className="text-slate-400 text-lg">
                    Create, edit, upload and share documents with ease.
                </p>
            </section>

            {/* My Documents */}
            <section className="px-10 mb-16">
                <h3 className="text-3xl font-bold mb-6">
                    📄 My Documents
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {ownedDocuments.map((doc) => (
                        <div
                            key={doc._id}
                            onClick={() =>
                                navigate(`/document/${doc._id}`)
                            }
                            className="
                                bg-slate-900
                                p-6
                                rounded-xl
                                cursor-pointer
                                hover:bg-slate-800
                                transition
                            "
                        >
                            <FaFileAlt size={35} />

                            <h4 className="mt-4 text-xl font-medium">
                                {doc.title}
                            </h4>

                            <p className="text-slate-500 text-sm mt-4">
                                Owner: {doc.owner}
                            </p>

                            {doc.sharedWith?.length > 0 && (
                                <span
                                    className="
                                        inline-block
                                        mt-3
                                        px-3
                                        py-1
                                        text-xs
                                        bg-green-900
                                        text-green-300
                                        rounded-full
                                    "
                                >
                                    Shared
                                </span>
                            )}
                        </div>
                    ))}

                    {/* Create New Document */}
                    <div
                        onClick={createDocument}
                        className="
                            bg-slate-900
                            p-6
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:bg-slate-800
                            transition
                        "
                    >
                        <FaPlus size={30} />
                    </div>
                </div>
            </section>

            {/* Shared With Me */}
            <section className="px-10 pb-20">
                <h3 className="text-3xl font-bold mb-6">
                    🤝 Shared With Me
                </h3>

                {sharedDocuments.length === 0 ? (
                    <div className="bg-slate-900 rounded-xl p-8 text-slate-500">
                        No shared documents yet.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {sharedDocuments.map((doc) => (
                            <div
                                key={doc._id}
                                onClick={() =>
                                    navigate(`/document/${doc._id}`)
                                }
                                className="
                                    bg-slate-900
                                    p-6
                                    rounded-xl
                                    cursor-pointer
                                    hover:bg-slate-800
                                    transition
                                "
                            >
                                <FaFileAlt size={35} />

                                <h4 className="mt-4 text-xl font-medium">
                                    {doc.title}
                                </h4>

                                <p className="text-slate-500 text-sm mt-4">
                                    Shared by: {doc.owner}
                                </p>

                                <span
                                    className="
                                        inline-block
                                        mt-3
                                        px-3
                                        py-1
                                        text-xs
                                        bg-blue-900
                                        text-blue-300
                                        rounded-full
                                    "
                                >
                                    Shared Access
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;