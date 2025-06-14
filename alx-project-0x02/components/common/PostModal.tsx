import React, { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({handleClose, handleCreatePost}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCreatePost(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <div className="flex justify-between">
                   <h2 className="text-xl font-bold mb-4">Create Post</h2>
                   <div className="cursor-pointer" onClick={handleClose}>
                       X
                   </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input type="text" className="w-full p-2 border rounded" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea className="w-full p-2 border rounded" rows={4} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PostModal;
