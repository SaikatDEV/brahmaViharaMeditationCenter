import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("time", time);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Post created successfully!");
        setTitle("");
        setDescription("");
        setTime("");
        setImage(null);
      } else {
        setMessage("Failed to create post. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-md mx-auto"
      >
        <div className="mt-40">
          <h2 className="text-xl font-bold mb-4">Create a Post</h2>
          {message && <p className="mb-4 text-green-500">{message}</p>}
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              className="w-full border p-2 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Time</label>
            <input
              type="datetime-local"
              className="w-full border p-2 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image</label>
            <input
              type="file"
              className="w-full"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
