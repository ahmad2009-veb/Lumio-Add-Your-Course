import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community and collaborative learning.",
    },
    {
      icon: Target,
      title: "Quality Education",
      description: "Every course is carefully reviewed to ensure the highest quality content.",
    },
    {
      icon: Award,
      title: "Expert Teachers",
      description: "Learn from real professionals with years of experience in their fields.",
    },
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We're dedicated to making education accessible and enjoyable for everyone.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About LUMIO
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering learners and teachers worldwide through accessible, high-quality online education
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              LUMIO was founded with a simple mission: to make quality education accessible to everyone, everywhere.
              We believe that learning should be engaging, affordable, and available to all who seek knowledge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to connect thousands of students with expert teachers across 50+ countries,
              offering courses in dozens of subjects ranging from technology to art, languages to business skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border border-border hover:shadow-medium transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Expert Teachers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-muted-foreground">Courses Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
