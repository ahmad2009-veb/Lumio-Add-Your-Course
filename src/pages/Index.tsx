import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, PlayCircle, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import heroImage from "@/assets/hero-education.jpg";
import courseDesign from "@/assets/course-design.jpg";
import courseProgramming from "@/assets/course-programming.jpg";
import courseArt from "@/assets/course-art.jpg";
import courseMusic from "@/assets/course-music.jpg";
import courseLanguage from "@/assets/course-language.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { getCourse } from "@/reducers/coursesSlice";

const Index = () => {
  const featuredCourses = useSelector((state: RootState) => state.courses.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);


  const categories = [
    { name: "Languages", icon: Globe, count: 350 },
    { name: "Music", icon: PlayCircle, count: 180 },
    { name: "Tech & Programming", icon: TrendingUp, count: 520 },
    { name: "Art & Design", icon: Award, count: 290 },
    { name: "Skills & Hobbies", icon: BookOpen, count: 410 },
    { name: "Business", icon: Users, count: 230 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroImage}
            alt="Education"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Learn. And discover the world within you.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Explore skills, unlock knowledge, and access thousands of lessons
              from real people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-large text-base"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/become-teacher">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-base"
                >
                  Become a Teacher
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Expert Teachers</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Video Lessons</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students learning from industry experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={"/courses"}>
              <Button size="lg" variant="outline" className="shadow-soft">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect course for your interests
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={`/courses?category=${encodeURIComponent(category.name)}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                    <Icon className="h-7 w-7 text-accent-foreground group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} courses
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join 10,000+ Learners Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your learning journey with a free trial. Watch the first
              week of any course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white flex-1 max-w-md"
              />
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-large"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your learning needs. No hidden fees,
              cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-4xl font-bold text-primary mb-4">
                $19<span className="text-base">/month</span>
              </p>
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Access to 50 courses</li>
                <li>Community support</li>
                <li>Basic analytics</li>
              </ul>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Choose Plan
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-4xl font-bold text-primary mb-4">
                $49<span className="text-base">/month</span>
              </p>
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Access to all courses</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
                <li>Certificates of completion</li>
              </ul>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Choose Plan
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-4xl font-bold text-primary mb-4">
                $99<span className="text-base">/month</span>
              </p>
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>All Pro features</li>
                <li>Team management</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
              </ul>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our learners and see how our courses have transformed
              their skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <p className="text-muted-foreground mb-4">
                "This platform helped me level up my career! The courses are
                practical and engaging."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Student 1"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Web Designer</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <p className="text-muted-foreground mb-4">
                "Amazing instructors and clear lessons. I gained real skills
                that I could apply immediately."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Student 2"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <p className="text-muted-foreground mb-4">
                "I love the variety of courses and the community support. It’s
                been a game changer for me."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Student 3"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    Emily Rodriguez
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Digital Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Top Instructors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from the best in the industry and achieve your goals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Instructor 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">David Williams</h3>
              <p className="text-sm text-muted-foreground">Music Production</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Instructor 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Web Design</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/38.jpg"
                alt="Instructor 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Development
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="Instructor 4"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Emily Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Digital Art</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is trusted by thousands of companies and
              organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 1"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 2"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 3"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 4"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 5"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-jiangbeizui-business-building-afternoon-office-building-outdoor-photography-photo-with-map-image_794452.jpg"
              alt="Company 6"
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learning with us is simple. Follow these steps to start your
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Course</h3>
              <p className="text-sm text-muted-foreground">
                Browse thousands of courses and pick the one that suits your
                goals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-sm text-muted-foreground">
                Watch lessons, complete exercises, and track your progress.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
              <p className="text-sm text-muted-foreground">
                Earn certificates and share your achievements with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get access to thousands of lessons and explore your potential. No
              credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white flex-1 max-w-md"
              />
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-large"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and learning resources
              from our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/10825009/pexels-photo-10825009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Article 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  10 Tips to Improve Your Design Skills
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn practical tips and exercises to enhance your design
                  workflow and creativity.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  Read More
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/10825009/pexels-photo-10825009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Article 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mastering JavaScript in 30 Days
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step guide to becoming proficient in JavaScript for
                  web development.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  Read More
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/10825009/pexels-photo-10825009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Article 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How to Launch Your Online Course
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A complete guide for instructors to plan, create, and launch
                  their online courses.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
