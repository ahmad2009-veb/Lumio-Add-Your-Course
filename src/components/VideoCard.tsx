import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import axios from "axios";

const VideoCard = ({ video, test, onFinishTest }) => {
  const [showTest, setShowTest] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");
  const [fortest, setfortest] = useState([]);

      const generateRandomAnswers = () => {
        if (!test) return;

        const correct = test.test1;

        const fakeAnswers = [test.test2, test.test3, test.test4].filter(
          Boolean
        );

        const allOptions = [correct, ...fakeAnswers];

        const shuffled = allOptions.sort(() => Math.random() - 0.5);

        setOptions(shuffled);
      };

      useEffect(() => {
        if (showTest) generateRandomAnswers();
      }, [showTest]);
      const handleSubmit = () => {
        if (options[selected] === test.test1) {
          setResult("correct");
            setTimeout(() => {
                onFinishTest(), 1200 
                setShowTest(false)
            });
        } else {
          setResult("wrong");
        }
      };
    
  const handleVideoEnd = () => setShowTest(true);

  async function getTest() {
    try {
      const { data } = await axios.get(
        `https://myserverofideaproject.onrender.com/api/testAfterVideo`
      );
      setfortest(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTest();
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
      <div className="aspect-video rounded-lg overflow-hidden bg-black">
        <YouTube
          videoId={video.id}
          opts={{ playerVars: { autoplay: 0 } }}
          onEnd={handleVideoEnd}
          iframeClassName="w-full h-full"
        />
      </div>

      <h3 className="text-xl font-bold mt-3 text-center">{video.title}</h3>

      {showTest && test && (
        <div className="mt-4 bg-blue-50 p-4 rounded-lg shadow border border-blue-200">
          <h4 className="text-lg font-bold text-blue-700 mb-2">Савол:</h4>

          <p className="font-medium mb-3">{test.test1}</p>

          <div className="space-y-2">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-3 py-2 rounded border 
                ${selected === i ? "bg-blue-200" : "bg-white"}
              `}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Check
          </button>

          {result === "correct" && (
            <p className="text-green-600 font-bold mt-2">Correct answe</p>
          )}
          {result === "wrong" && (
            <p className="text-red-600 font-bold mt-2">✘ Wrong answe</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoCard;