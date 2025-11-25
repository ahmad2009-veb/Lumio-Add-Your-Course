import { Link } from "react-router-dom";
import { Video, Upload, DollarSign, Users, TrendingUp, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import becomeTeacherImage from "@/assets/become-teacher.jpg";

const BecomeTeacher = () => {
  const benefits = [
    {
      icon: Video,
      title: "Create Video Lessons",
      description: "Upload professional video lessons and share your expertise with thousands of students worldwide.",
    },
    {
      icon: Upload,
      title: "Upload Resources",
      description: "Share PDFs, worksheets, and supplementary materials to enhance your students' learning experience.",
    },
    {
      icon: DollarSign,
      title: "Earn Money",
      description: "Set your own course prices and earn revenue from every enrollment. Get paid monthly directly to your account.",
    },
    {
      icon: Users,
      title: "Live Sessions",
      description: "Host live video sessions with your students, answer questions, and build a community around your courses.",
    },
    {
      icon: TrendingUp,
      title: "Track Analytics",
      description: "Monitor enrollments, student progress, and revenue with detailed analytics and insights.",
    },
    {
      icon: Award,
      title: "Build Your Brand",
      description: "Establish yourself as an expert in your field and grow your professional reputation.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply to Teach",
      description: "Fill out our simple application form and tell us about your expertise and teaching experience.",
    },
    {
      number: "02",
      title: "Create Your Course",
      description: "Plan your curriculum, record your lessons, and upload your content using our easy-to-use platform.",
    },
    {
      number: "03",
      title: "Launch & Earn",
      description: "Publish your course, reach thousands of students, and start earning from your knowledge.",
    },
  ];

  const isEmail = localStorage.getItem("userEmail")

  console.log(isEmail);
  

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Share Your Knowledge.
                <br />
                <span className="text-primary">Inspire Learners.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of expert teachers on LUMIO and earn money by
                sharing your skills and expertise with a global audience of
                eager learners.
              </p>
              {!isEmail ? (
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-large"
                  >
                    Start Teaching Today
                  </Button>
                </Link>
              ) : (
                <Link to="/addmycourse">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-large"
                  >
                    Start Teaching Today
                  </Button>
                </Link>
              )}
            </div>
            <div className="animate-scale-in">
              <img
                src={becomeTeacherImage}
                alt="Become a Teacher"
                className="rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Paid to Teachers</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Teachers</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Students Taught</div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Teach on LUMIO?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and monetize your online
              courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to start teaching
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Teaching?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of expert teachers and start earning today. No
              fees to get started.
            </p>
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-large"
              >
                Apply Now - It's Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeTeacher;
