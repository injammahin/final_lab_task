"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const registration = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const validationRegistrationform = () => {
    if (!fullName || !password || !email) {
      return false;
    }
    return true;
  };
  const handleSignUp = () => {
    if (validationRegistrationform()) {
      alert("registration successfull");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          fullName:
          <input
            type="text"
            placeholder="Enter your fullName "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          userName:
          <input
            type="text"
            placeholder="Enter your userName "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          address:
          <input
            type="text"
            placeholder="Enter your address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          companyName:
          <input
            type="text"
            placeholder="Enter your companyName "
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          phoneNumber:
          <input
            type="number"
            placeholder="Enter your phoneNumber "
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          city:
          <input
            type="text"
            placeholder="Enter your city "
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          fullName:
          <input
            type="text"
            placeholder="Enter your fullName "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}
        <label>
          country:
          <input
            type="text"
            placeholder="Enter your country "
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <br />
        {/* ///////////// */}

        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email addrerss"
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
        <label>
          confirmPassword:
          <input
            type="text"
            placeholder="Enter your confirmPassword "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {/* ///////////// */}
        <br />
        <button type="submit">Sign Up</button>
        <h1>
          already have an account? : <Link href="/login">Login</Link>
        </h1>
      </form>
    </div>
  );
};
export default registration;
