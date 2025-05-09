"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartCard({ onStart, loading }) {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setShowLogin(false);
    router.push("/questions");
  };

  return (
    <>
      <div className="bg-[#fff3eb] rounded-2xl shadow-lg p-8 w-[90%] max-w-md text-center flex flex-col items-center relative">
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-[#F2E4D7] flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=KNrkx7HDKAip&format=png&color=000000"
              alt="Quiz Icon"
              className="w-12 h-12"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-[#5B6427]">Ancient Islamic Civilization</h1>
        <p className="text-gray-500 text-sm mb-6 px-2">
          Unearth the glories of a bygone era! Journey through the fascinating world of ancient Islamic civilization in this quick 5-question quiz.
        </p>
        <button
          onClick={onStart}
          disabled={loading}
          className="bg-[#5D8870] text-[#FFF3EB] px-6 py-2 rounded-lg font-semibold hover:bg-[#5B6427] transition flex items-center justify-center mb-2"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-[#FFF3EB]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : null}
          {loading ? "Loading..." : "Start Quiz"}
        </button>

        <button
          className="text-sm text-[#5B6427] hover:underline"
          onClick={() => setShowLogin(true)}
        >
          Want to modify the question base?
        </button>

        {showLogin && (
          <div className="absolute top-1/2 left-1/2 bg-[#F2E4D7] p-6 rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm">
            <h3 className="text-lg font-bold text-[#5B6427] mb-2">Login</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mb-3 text-[#5D8870] rounded border border-[#5D8870] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-[#5D8870] text-[#FFF3EB] px-4 py-2 rounded w-full hover:bg-[#5B6427]"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
}
