"use client";
import { useState } from "react";

export default function GenerateQuestionsModal({ onClose = () => {} }) {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setSuccessMsg("");

    try {
      const geminiResponse = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count, title: "Ancient Islamic Civilization" }),
      });

      const result = await geminiResponse.json();
      if (result.success) setSuccessMsg("Questions generated and saved!");
    } catch (err) {
      setSuccessMsg("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#fff3eb] rounded-xl p-6 w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold text-[#5B6427] mb-4">Generate AI Questions</h2>
        <input
          type="number"
          min="1"
          max="20"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="w-full p-2 border border-[#5D8870] text-[#5D8870] rounded mb-4"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-[#5D8870] text-[#FFF3EB] px-6 py-2 rounded hover:bg-[#5B6427]"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <p className="mt-4 text-sm text-[#5B6427]">{successMsg}</p>
        <button
          className="mt-6 text-sm underline text-[#E98171]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
