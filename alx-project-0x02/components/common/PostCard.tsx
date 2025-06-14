import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    return (
        <div className="border p-4 rounded-md">
            <h2 className="font-bold">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default PostCard;
