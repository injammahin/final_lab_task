"use client";
import { useState } from "react";

import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validationLoginform = () => {
    if (!password || !email) {
      return false;
    }
    return true;
  };
  const handleSignIn = () => {
    if (validationLoginform()) {
      alert("Login successfull");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
