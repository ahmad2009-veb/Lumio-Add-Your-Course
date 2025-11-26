import { Button } from "@/components/ui/button";
import { Clock, Users, Award, Calendar, CheckCircle, Undo2, Youtube } from "lucide-react";
import courseImage from "@/assets/course-design.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "@/components/VideoCard";

const AboutCourse = () => {
  const { id } = useParams();
  const [iduser, setiduser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [testDone, setTestDone] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const [fortest,setfortest] = useState([])

  const handleVideoEnd = () => {
    setShowTest(true);
  };

  async function getTest() {
    try {
      const { data } = await axios.get(`https://myserverofideaproject.onrender.com/api/testAfterVideo`);
        setfortest(data)
    } catch (error) {
      console.log(error);
    }
  }

  async function getCourseById() {
    try {
      const { data } = await axios.get(`https://myserverofideaproject.onrender.com/api/courses/${id}`);
      setiduser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCourseById();
  }, [id]);

  useEffect(() => {
    getTest()
  },[])

  const getVideoId = (url) => {
    if (!url) return null;
    if (url.includes("youtu.be/"))
      return url.split("youtu.be/")[1].split("?")[0];
    if (url.includes("youtube.com/watch"))
      return new URL(url).searchParams.get("v");
    return null;
  };

  const videos = [];
  if (iduser) {
    for (let i = 1; i <= 10; i++) {
      const url = iduser[`video${i}`];
      const id = getVideoId(url);
      if (id) videos.push({ id, title: `Video ${i}` });
    }
  }


    if (loading) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
          <p className="mt-3 text-gray-700 font-medium text-lg">Loading...</p>
        </div>
      );
    }


    if (!iduser) {
      return (
        <div className="min-h-screen flex items-center justify-center text-red-600">
          Course not found.
        </div>
      );
    }

    
  const courseInfo = [
    {
      icon: Calendar,
      label: "Start Date",
      value: iduser?.startCourse || "Loading...",
    },
    {
      icon: Clock,
      label: "Schedule",
      value: iduser?.ClassPorWeek || "Loading...",
    },
    {
      icon: Users,
      label: "Group Size",
      value: iduser?.groupPupil || "Loading...",
    },
    { icon: Award, label: "Certificate", value: "Included" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900">
        Loading course details...
      </div>
    );
  }

  if (!iduser) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white z-10" />
        <img
          src={iduser.img || courseImage}
          alt={iduser.name || "Course Image"}
          className="w-full h-[500px] object-cover opacity-70"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-700 animate-fade-in">
                {iduser.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 animate-fade-in animation-delay-100">
                {iduser.about}
              </p>
              <div className="pt-4 animate-fade-in animation-delay-200">
                <Link to={"/courses"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                  >
                    Back to Course
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg p-6 shadow-md border border-gray-300 hover:shadow-lg hover:border-blue-300 transition-all duration-300 animate-fade-in animation-delay-${
                (index + 3) * 100
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <info.icon className="w-8 h-8 text-blue-700" />
                <p className="text-sm text-blue-600">{info.label}</p>
                <p className="text-lg font-bold text-gray-900">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Why {iduser.name}?
          </h2>
          <div className="bg-gray-100 rounded-xl p-8 shadow-md border border-gray-300">
            <p className="text-blue-600 text-lg leading-relaxed">
              {iduser.whyCourse}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {[
              {
                title: "Hands-on Projects",
                desc: "Build real-world websites that showcase your skills to employers",
              },
              {
                title: "Expert Instructors",
                desc: "Learn from industry veterans with years of professional experience",
              },
              {
                title: "Career Support",
                desc: "Get guidance on landing your dream job in web design",
              },
              {
                title: "Lifetime Access",
                desc: "Access course materials and updates forever",
              },
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="flex gap-3 bg-gray-100 rounded-lg p-6 border border-gray-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-blue-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 pb-24">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Course Preview Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-xl p-4 shadow-md border-2 border-blue-300">
              <VideoCard
                video={videos[currentVideo]}
                test={fortest[currentVideo]}
                onFinishTest={() => setTestDone(true)}
              />
            </div>

            {testDone && currentVideo < videos.length - 1 && (
              <button
                onClick={() => {
                  setCurrentVideo(currentVideo + 1);
                  setTestDone(false);
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                ► Watch the next video
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCourse;
