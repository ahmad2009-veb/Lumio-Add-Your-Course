import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import courseDesign from "@/assets/course-design.jpg";
import courseProgramming from "@/assets/course-programming.jpg";

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      id: "1",
      title: "Complete Web Design Masterclass",
      instructor: "Sarah Johnson",
      image: courseDesign,
      progress: 45,
      lastAccessed: "2 hours ago",
    },
    {
      id: "2",
      title: "Full-Stack Web Development Bootcamp",
      instructor: "Michael Chen",
      image: courseProgramming,
      progress: 20,
      lastAccessed: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back!</h1>
          <p className="text-white/90">Continue your learning journey</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">2</span>
                </div>
                <p className="text-muted-foreground">Enrolled Courses</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">24h</span>
                </div>
                <p className="text-muted-foreground">Learning Time</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">1</span>
                </div>
                <p className="text-muted-foreground">Certificates</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">85%</span>
                </div>
                <p className="text-muted-foreground">Avg. Progress</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">My Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="border border-border hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-semibold text-foreground">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">
                          Last accessed: {course.lastAccessed}
                        </p>
                        <Link to={`/course/${course.id}`}>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Continue Learning
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
