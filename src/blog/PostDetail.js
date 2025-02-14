import React from 'react';

const PostDetail = ({ match }) => {
    const { id } = match.params;

    return (
        <div>
            <h1>Post Detail</h1>
            <div>
                {/* Fetch and display the post details using the id */}
                {/* Example: <h2>{post.title}</h2> <p>{post.content}</p> */}
            </div>
        </div>
    );
};

export default PostDetail;
