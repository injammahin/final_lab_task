"use client";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationLoginForm = () => {
    if (!password || !email) {
      return false;
    }
    return true;
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validationLoginForm()) {
      alert("Login successful");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Login Form</h1>
      <form onSubmit={handleSignIn} className="max-w-md mx-auto">
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <button
          className="bg-blue-400 text-white py-2 px-4 md:px-20 rounded w-full mt-4 hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
