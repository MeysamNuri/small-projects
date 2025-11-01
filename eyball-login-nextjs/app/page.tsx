"use client";
import { useState } from "react";
import Eye from "./_component/Eye";
import LoginForm from "./_component/LoginForm";

// Main Login Page
export default function LoginPage() {
  const [eyesClosed, setEyesClosed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-stone-900 to-stone-950 font-sans">
      <div className="w-[420px] p-8 rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <h2 className="text-center mb-2 text-2xl font-bold text-stone-800">
          Welcome Back
        </h2>

        {/* Eyes Container */}
        <div className="flex gap-5 justify-center mb-8">
          <Eye mirror={false} cover={eyesClosed} />
          <Eye mirror={false} cover={eyesClosed} />
        </div>
        <LoginForm onEyeClose={setEyesClosed} />
      </div>
    </div>
  );
}
