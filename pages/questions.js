"use client";
import { useEffect, useState } from "react";
import GenerateQuestionsModal from "./components/generateQuestionMenu";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchQuestions = async () => {
    const res = await fetch("/api/questions");
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF3EB] p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-[#5B6427] mb-4">Question Bank</h1>
        <button
          onClick={() => setShowModal(true)}
          className="mb-6 bg-[#5D8870] text-[#FFF3EB] px-4 py-2 rounded hover:bg-[#5B6427]"
        >
          Generate Questions using AI
        </button>

        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q._id} className="bg-[#F2E4D7] p-4 rounded text-[#5B6427]">
              {q.question}
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <GenerateQuestionsModal
          onClose={() => {
            setShowModal(false);
            fetchQuestions();
          }}
        />
      )}
    </div>
  );
}
