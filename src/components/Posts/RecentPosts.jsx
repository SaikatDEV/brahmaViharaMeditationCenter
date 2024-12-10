import React from "react";

function RecentPosts({ posts }) {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-xl">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(post.time).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPosts;
