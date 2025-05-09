"use client";
import { useState } from "react";
import StartCard from "./components/StartCard";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

export default function Home() {
  const [step, setStep] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/questions");
      const allQuestions = await res.json();
      const picked = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
      setQuestions(picked);
      setCurrentIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setStep("quiz");
    } catch (err) {
      console.error("Failed to load questions", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null); // true/false from API

  const handleSubmit = async () => {
    if (!selectedAnswer || isSubmitting) return;

    setIsSubmitting(true);
    const currentQ = questions[currentIndex];

    try {
      const res = await fetch("/api/answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: currentQ._id,
          userAnswer: selectedAnswer,
        }),
      });

      const data = await res.json(); // Expect: { correct: true/false }

      setIsCorrect(data.correct);
      if (data.correct) {
        setScore((prev) => prev + 1);
      }
      setHasSubmitted(true);
    } catch (err) {
      console.error("Error submitting answer", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
      setIsCorrect(null);
    } else {
      setStep("result");
    }
  };

  const handleRetry = () => {
    setStep("start");
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#FFF3EB] via-[#E98171] to-[#5D8870]">
      {step === "start" && <StartCard onStart={handleStart} loading={loading} />}
      {step === "quiz" && <QuestionCard question={questions[currentIndex]} choices={questions[currentIndex].choices} correctAnswer={questions[currentIndex].correctAnswer} selectedAnswer={selectedAnswer} onAnswerSelect={handleAnswerSelect} onSubmit={handleSubmit} onNext={handleNext} currentIndex={currentIndex} total={questions.length} hasSubmitted={hasSubmitted} isCorrect={isCorrect} isSubmitting={isSubmitting} />}
      {step === "result" && <ResultCard score={score} total={questions.length} onRetry={handleRetry} />}
    </div>
  );
}
