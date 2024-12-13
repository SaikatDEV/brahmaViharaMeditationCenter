import React, { useState } from "react";

function AdminLogin({ onLoginSuccess, onClose, isAdminLoggedIn, onLogout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_USER_NAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      onLoginSuccess();
    } else {
      setError("Invalid credentials. Please try again with valid credentials.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "admin-login-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="admin-login-overlay"
      className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-30"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        {!isAdminLoggedIn ? (
          <>
            <h2 className="text-2xl font-bold mb-4">BVMC Admin Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full border p-2 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">You are logged in!</h2>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
