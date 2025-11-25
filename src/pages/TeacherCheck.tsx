import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

// 5 random general knowledge questions in English
const questions: Question[] = [
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctIndex: 1,
  },
  {
    text: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctIndex: 1,
  },
  {
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctIndex: 1,
  },
  {
    text: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
    correctIndex: 1,
  },
  {
    text: "In which year did the first man land on the Moon?",
    options: ["1965", "1969", "1971", "1973"],
    correctIndex: 1,
  },
];

const TeacherCheck = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [score, setScore] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleAnswerChange(index: number, value: number) {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  function handleSubmit() {
    const correctAnswers = answers.filter(
      (ans, idx) => ans === questions[idx].correctIndex
    ).length;
    setScore(correctAnswers);
    setModalOpen(true);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Teacher Eligibility Test
      </h1>

      {questions.map((q, idx) => (
        <div
          key={idx}
          className="mb-6 p-4 border rounded-xl hover:shadow-lg transition-shadow duration-300"
        >
          <p className="mb-3 font-semibold text-gray-700">
            {idx + 1}. {q.text}
          </p>
          <div className="flex flex-col gap-2">
            {q.options.map((option, optIdx) => (
              <label
                key={optIdx}
                className="flex items-center gap-2 p-2 border rounded-lg hover:bg-primary/10 cursor-pointer transition"
              >
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={optIdx}
                  checked={answers[idx] === optIdx}
                  onChange={() => handleAnswerChange(idx, optIdx)}
                  className="accent-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full py-3 mt-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition-all"
      >
        Submit Test
      </button>

      {/* Modal */}
      {modalOpen && score !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 text-center shadow-2xl animate-fadeIn">
            {score >= 2 ? (
              <>
                <h2 className="text-xl font-bold text-green-600">
                  You can become a teacher!
                </h2>
                <p className="mt-2 text-gray-700">
                  You got {score} correct answers.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-red-600">
                  You cannot become a teacher
                </h2>
                <p className="mt-2 text-gray-700">
                  You got {score} correct answers. Not enough correct answers.
                </p>
              </>
            )}
            <button
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
              onClick={() => {
                setModalOpen(false);
                if (score >= 2) navigate("/addmycourse");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherCheck;
