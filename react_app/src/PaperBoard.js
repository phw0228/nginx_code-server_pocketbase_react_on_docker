import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Board = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    const newId = posts.length + 1;
    setPosts([...posts, { ...newPost, id: newId }]);
    setNewPost({ title: "", content: "" }); // 입력 필드 초기화
  };

  return (
    <div className="bg-blue-100 min-h-screen p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Board</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-4 border rounded"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            placeholder="Content"
            className="w-full p-2 mb-4 border rounded"
            rows="4"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          ></textarea>
          <button
            onClick={addPost}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add post
          </button>
        </div>
        <div>
          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <h3 className="text-xl font-semibold text-blue-700">
                {post.title}
              </h3>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
