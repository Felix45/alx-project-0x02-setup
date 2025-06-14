import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section>
            <Header />
            <h1 className="font-bold">Posts</h1>
            {
                posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <PostCard key={post.id} userId={post.userId} title={post.title} content={post.body} />
                        ))}
                    </div>
                ) : (
                    <p>No posts available</p>
                )}
        </section>
    );
}

export default Posts;
