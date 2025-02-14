import React from 'react';
import PostForm from './PostForm';

const AdminBlog = () => {
    return (
        <div>
            <h1>Admin Blog</h1>
            <PostForm />
            <ul>
                {/* Map through the list of posts and display them with edit and delete options */}
                {/* Example: posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                )) */}
            </ul>
        </div>
    );
};

export default AdminBlog;
