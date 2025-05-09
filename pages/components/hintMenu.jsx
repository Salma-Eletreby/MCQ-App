"use client";
import { useState } from "react";

export default function HintButton({ question }) {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleGetHint = async () => {
    setLoading(true);
    setShowPrompt(false);
    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setHint(data.hint);
    } catch (err) {
      setHint("Failed to fetch hint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#5D8870] text-white p-3 rounded-full shadow-lg hover:bg-[#4a6e5c]"
      >
        💡 Hint
      </button>

      {open && (
        <div className="mt-2 bg-[#F2E4D7] text-[#5B6427] rounded-lg p-4 shadow-xl w-64">
          {!hint && !loading && !showPrompt && (
            <div>
              <p className="mb-3">Would you like a hint for this question?</p>
              <div className="flex justify-between">
                <button
                  onClick={handleGetHint}
                  className="bg-[#5D8870] text-white px-4 py-1 rounded hover:bg-[#4a6e5c]"
                >
                  Yes
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-[#E98171] text-white px-4 py-1 rounded hover:bg-[#c66859]"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {loading && (
            <div className="text-center animate-pulse">
              <p>Generating hint...</p>
            </div>
          )}

          {hint && (
            <div>
              <h3 className="font-bold mb-2">Hint:</h3>
              <p>{hint}</p>
              <button
                onClick={() => {
                  setOpen(false);
                  setHint(null);
                }}
                className="mt-3 bg-[#5D8870] text-white px-4 py-1 rounded hover:bg-[#4a6e5c]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
