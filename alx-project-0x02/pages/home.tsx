import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";


const Home: React.FC = () => {
    const [data, setData] = useState<CardProps[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCreatePost = (title: string, content: string) => {
        setData((prevState) => {
            return [...prevState, {title, content}]
        });
    }


    return (
        <section>
            <header className="flex justify-between items-center mb-4">
                <h1 className="font-bold">Home page</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpen}>
                    Create Post
                </button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(({title, content}) => <Card title={title} content={content} />)
                }
            </div>
            { isOpen && (<PostModal handleClose={handleOpen} handleCreatePost={handleCreatePost} />) }
        </section>
    );
};

export default Home;
