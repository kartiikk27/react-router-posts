import React, { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(5);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, count + 5));
        setCount((prev) => prev + 5);
      });
  };

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={fetchPosts}>Fetch More Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
