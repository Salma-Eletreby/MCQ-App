import HintButton from "./hintMenu";

export default function QuestionCard({
  question ={},
  choices =[],
  correctAnswer="",
  selectedAnswer="",
  onAnswerSelect= () => {},
  onSubmit= () => {} ,
  onNext = () => {},
  currentIndex=0,
  total=0,
  hasSubmitted= () => {},
  isCorrect=false,
  isSubmitting=false,
}) {
  return (
    <div className="bg-[#fff3eb] text-[#5B6427] rounded-2xl shadow-lg p-8 w-[90%] max-w-md text-center">
      <h2 className="text-lg font-semibold mb-4">
        Question {currentIndex + 1} of {total}
      </h2>
      <p className="text-xl mb-6 font-medium">{question.question}</p>

      <div className="space-y-3">
        {choices.map((choice, idx) => {
          let bg = "bg-[#F2E4D7] text-black";
          if (hasSubmitted) {
            if (choice === selectedAnswer && !isCorrect) {
              bg = "bg-[#E98171] text-white";
            }
            if (choice === selectedAnswer && isCorrect) {
              bg = "bg-[#5D8870] text-white";
            }
            if(choice === correctAnswer){
              bg = "bg-[#5D8870] text-white";
            }
          } else if (choice === selectedAnswer) {
            bg = "bg-[#5B6427] text-white";
          }

          return (
            <button
              key={idx}
              disabled={hasSubmitted}
              onClick={() => onAnswerSelect(choice)}
              className={`block w-full px-4 py-2 rounded-md border transition ${bg} ${
                !hasSubmitted && "hover:bg-[#5B6427]/80"
              }`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      <button
        onClick={hasSubmitted ? onNext : onSubmit}
        disabled={!selectedAnswer || isSubmitting}
        className={`mt-6 px-6 py-2 rounded-md text-[#FFF3EB] font-medium transition ${
          selectedAnswer && !isSubmitting
            ? "bg-[#E98171] hover:bg-[#e76c5e]"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? "Submitting..." : hasSubmitted ? "Next" : "Submit Answer"}
      </button>
      <HintButton question={question.question} />
    </div>
  );
}
