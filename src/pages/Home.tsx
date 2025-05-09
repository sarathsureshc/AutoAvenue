import React, import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get('/api/blogs');
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Welcome to AUTO AVENUE</h1>
            <div>
                {blogs.map(blog => (
                    <div key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <a href={`/blog/${blog._id}`}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
