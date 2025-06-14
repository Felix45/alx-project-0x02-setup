import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { GetStaticProps } from "next";
import { type PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {

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

export const getStaticProps: GetStaticProps<{ posts: PostProps[] }> = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts: PostProps[] = await response.json();
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

export default Posts;
