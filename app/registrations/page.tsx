"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registration = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const validationRegistrationForm = () => {
    if (!fullName || !password || !email) {
      return false;
    }
    return true;
  };

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validationRegistrationForm()) {
      alert("Registration successful");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSignUp} className="max-w-md mx-auto">
        <label className="block mb-2">
          Full Name:
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          User Name:
          <input
            type="text"
            placeholder="Enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Address:
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Company Name:
          <input
            type="text"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input
            type="number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          City:
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Country:
          <input
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            placeholder="Enter your email address"
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <button
          className="bg-blue-400 text-white py-2 px-4 md:px-20 rounded w-full mt-4 hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>
        <h1 className="mt-4">
          Already have an account? : <Link href="/login">Login</Link>
        </h1>
      </form>
    </div>
  );
};

export default Registration;
