export default function ResultCard({ score, total, onRetry }) {
  const percentage = Math.round((score / total) * 100);

  return (
      <div className="bg-[#fff3eb] text-[#5B6427] rounded-2xl shadow-lg p-8 w-[90%] max-w-md text-center flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="text-6xl font-bold mb-2 text-[#5B6427]">{percentage}%</div>
      <p className="mb-6 text-lg">You scored {score} out of {total}</p>
      <button onClick={onRetry} className="bg-[#5D8870] text-white px-6 py-3 rounded-md">Retry Quiz</button>
    </div>
  );
}
