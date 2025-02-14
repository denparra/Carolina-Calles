import React, { useState } from 'react';

const PostForm = ({ post = {} }) => {
    const [title, setTitle] = useState(post.title || '');
    const [content, setContent] = useState(post.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        // Example: savePost({ title, content });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default PostForm;
