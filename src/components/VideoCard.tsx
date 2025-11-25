import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import axios from "axios";

const VideoCard = ({ video, test }) => {
  const [showTest, setShowTest] = useState(false);

    const [fortest, setfortest] = useState([]);
    
  const handleVideoEnd = () => setShowTest(true);

    async function getTest() {
      try {
        const { data } = await axios.get(
          `http://localhost:3002/testAfterVideo`
        );
        setfortest(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
        getTest()
      },[])

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
      <div className="aspect-video rounded-lg overflow-hidden bg-black">
        <YouTube
          videoId={video.id}
          opts={{ playerVars: { autoplay: 0 } }}
          onEnd={() => setShowTest(true)}
          iframeClassName="w-full h-full rounded-lg"
          className="w-full h-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">
        {video.title}
      </h3>

      {showTest && test && (
        <div className="mt-4 bg-blue-50 p-4 rounded-lg shadow border border-blue-200">
          <p className="font-bold text-blue-700 text-lg mb-2">
            Тест пас аз тамом шудан:
          </p>
          <ul className="list-decimal list-inside space-y-1 text-gray-800 text-sm">
            <li>{test.test1}</li>
            <li>{test.test2}</li>
            <li>{test.test3}</li>
            <li>{test.test4}</li>
            <li>{test.test5}</li>
            <li>{test.test6}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default VideoCard;