import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Users, BookOpen, TrendingUp, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import courseDesign from "@/assets/course-design.jpg";
import courseProgramming from "@/assets/course-programming.jpg";

const TeacherDashboard = () => {
  const myCourses = [
    {
      id: "1",
      title: "Complete Web Design Masterclass",
      image: courseDesign,
      students: 12500,
      revenue: 62500,
      rating: 4.8,
      status: "Published",
    },
    {
      id: "2",
      title: "Advanced UI/UX Principles",
      image: courseProgramming,
      students: 6800,
      revenue: 34000,
      rating: 4.9,
      status: "Published",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Teacher Dashboard</h1>
              <p className="text-white/90">Manage your courses and track your success</p>
            </div>
            <Button className="bg-white text-primary hover:bg-white/90">
              <Plus className="mr-2 h-5 w-5" />
              Create Course
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">$96K</span>
                </div>
                <p className="text-muted-foreground">Total Revenue</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">19.3K</span>
                </div>
                <p className="text-muted-foreground">Total Students</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">2</span>
                </div>
                <p className="text-muted-foreground">Active Courses</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">4.85</span>
                </div>
                <p className="text-muted-foreground">Avg. Rating</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">My Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="border border-border hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-32 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {course.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Students</p>
                            <p className="font-semibold text-foreground">
                              {course.students.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Revenue</p>
                            <p className="font-semibold text-foreground">
                              ${(course.revenue / 1000).toFixed(0)}K
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Rating</p>
                            <p className="font-semibold text-foreground">⭐ {course.rating}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit Course
                          </Button>
                          <Button size="sm" variant="outline">
                            View Stats
                          </Button>
                        </div>
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

export default TeacherDashboard;
