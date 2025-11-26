import { Link, useNavigate, useParams } from "react-router-dom";
import { Star, Clock, Users, Award, PlayCircle, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import courseDesign from "@/assets/course-design.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();

const [course, setCourse] = useState<any>(null);

  const navigate = useNavigate()
  
useEffect(() => {
  async function getById() {
    try {
      const { data } = await axios.get(`https://myserverofideaproject.onrender.com/api/data/${id}`);
      setCourse(data);
    } catch (error) {
      console.log(error);
    }
  }

  getById();
}, [id]);

  const courseModules = [
    {
      title: "Introduction to Web Design",
      lessons: 8,
      duration: "2 hours",
      locked: false,
    },
    {
      title: "Color Theory and Typography",
      lessons: 12,
      duration: "3 hours",
      locked: false,
    },
    {
      title: "Layout Design Principles",
      lessons: 10,
      duration: "2.5 hours",
      locked: true,
    },
    {
      title: "Advanced Design Techniques",
      lessons: 15,
      duration: "4 hours",
      locked: true,
    },
  ];

  const features = [
    "12 weeks of premium content",
    "45 video lessons",
    "15 hands-on projects",
    "Lifetime access to materials",
    "Certificate of completion",
    "Direct teacher support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-to-b from-secondary to-background py-12">
        {course && (
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 animate-fade-in">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {course.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Learn {course.title} with {course.instructor}.
                </p>

                <div className="cursor-pointer flex items-center gap-6 mb-6">
                  <div onClick={()=>navigate(`/instructor/${course.instructorId}`)} className="flex items-center gap-2">
                    <img
                      src={course.image}
                      alt={course.instructor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {course.instructor}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Instructor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">
                      {course.rating}
                    </span>
                    <span>({course.students} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-5 w-5" />
                    <span>Certificate included</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-20 shadow-large border-2 border-primary/20">
                  <CardContent className="p-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {course.price == 0 ? "Free" : "$"+course.price}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        🎁 Watch first week for free!
                      </p>
                    </div>
                    <Link to={`/aboutCourse/${course.id}`}>
                    <Button
                      size="lg"
                      className="w-full mb-3 bg-primary hover:bg-primary/90"
                      >
                      Enroll Now
                    </Button>
                      </Link>
                    <Button size="lg" variant="outline" className="w-full mb-4">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Preview Course
                    </Button>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-foreground mb-3">
                        This course includes:
                      </p>
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="py-12 md:mt-[-400px]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:w-2/3">
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-secondary">
                <TabsTrigger value="curriculum" className="flex-1 sm:flex-none">
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="description"
                  className="flex-1 sm:flex-none"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1 sm:flex-none">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Course Curriculum
                </h2>
                {courseModules.map((module, index) => (
                  <Card
                    key={index}
                    className={`border ${
                      module.locked ? "opacity-60" : ""
                    } hover:shadow-soft transition-shadow`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            {module.locked && (
                              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                                🔒 Locked
                              </span>
                            )}
                            {!module.locked && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                ✓ Free Preview
                              </span>
                            )}
                            {module.title}
                          </h3>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <PlayCircle className="h-4 w-4" />
                              {module.lessons} lessons
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="description">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Course
                </h2>
                <div className="prose max-w-none text-muted-foreground space-y-4">
                  <p>
                    Welcome to the Complete Web Design Masterclass! This
                    comprehensive course will take you from beginner to advanced
                    web designer.
                  </p>
                  <p>
                    Throughout this course, you'll learn the fundamental
                    principles of design, including color theory, typography,
                    layout composition, and user experience.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    What You'll Learn:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Master the principles of effective web design</li>
                    <li>
                      Understand color theory and create beautiful palettes
                    </li>
                    <li>Learn typography fundamentals and font pairing</li>
                    <li>Create responsive layouts that work on all devices</li>
                    <li>Design stunning user interfaces and experiences</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Student Reviews
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review} className="border">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <img
                            src={courseDesign}
                            alt="Student"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-foreground">
                                John Doe
                              </h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Amazing course! The instructor explains everything
                              clearly and the projects are really helpful for
                              building a portfolio.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
