import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import { MessageCircle, UserPlus, BookOpen, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Course } from "@/reducers/coursesSlice";
import { Button } from "@/components/ui/button";

const Instructor = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [instructor, setInstructor] = useState<any>(null);
  const [isFollowed, setIsFollowed] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [canFollow, setCanFollow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const navigate = useNavigate()
  
  function handleFollow() {
    if (!selectedCourse) return;

    if (selectedCourse.price > 0) {
      setModalOpen(true);
    } else {
      alert(`You are now following ${selectedCourse.instructor}`);
      setCanFollow(true);
    }
  }

  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://myserverofideaproject.onrender.com/api/data`);
        const instructorCourses = data.filter(
          (c: any) => c.instructorId === id
        );
        setCourses(instructorCourses);

        const inst = instructorCourses[0];
        setInstructor(inst);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

    
  const stats = [
    { label: "Courses", value: courses.length, icon: BookOpen },
    { label: "Students", value:  instructor?.students || "0", icon: Users },
    { label: "Followers", value: "1.2K", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <div className="gradient-hero h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        </div>

        <div className="container mx-auto px-4 -mt-24">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <img
                src={instructor?.image}
                alt={instructor?.instructor}
                className="relative w-40 h-40 rounded-full object-cover border-8 border-background shadow-glow"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  if (!courses[0]) return;
                  setSelectedCourse(courses[0]);

                  handleFollow();
                }}
                className={`inline-flex items-center font-semibold px-8 py-3 rounded-full transition-all hover-scale
  ${
    isFollowed
      ? "bg-background text-primary border border-primary"
      : "bg-primary text-primary-foreground hover:bg-primary/90"
  }`}
              >
                {isFollowed ? "Following" : "Follow"}
              </button>

              <button
                onClick={() => navigate(`/messages/${instructor.id}`)}
                className="inline-flex items-center glass-card font-semibold px-8 py-3 rounded-full border-2 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Payment Required</h2>
            <p className="mb-4">
              You must pay ${selectedCourse?.price} to follow{" "}
              {selectedCourse?.instructor}.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setCanFollow(true);
                  setModalOpen(false);
                  alert(
                    `Payment successful! You are now following ${selectedCourse?.instructor}`
                  );
                }}
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 mt-8">
        <div className="glass-card rounded-3xl p-8 shadow-soft max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              {instructor?.instructor || "Instructor Name"}
            </h1>
            <p className="text-muted-foreground text-lg">@instructor{id}</p>
          </div>

          <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional Instructor • Expert in {instructor?.category} • Helping
            students achieve their goals and grow their skills.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 hover-scale cursor-pointer border border-border/50"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {instructor?.category && (
            <div className="flex justify-center">
              <span className="inline-flex items-center px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-secondary to-accent/30 hover:shadow-glow transition-all duration-300 border border-border/50">
                {instructor.category}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Courses by {instructor?.instructor || "Instructor"}
          </span>
        </h2>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course: any) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="glass-card rounded-3xl p-12 max-w-md mx-auto">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No courses available yet
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructor;
