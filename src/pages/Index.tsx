import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Users, Award, Briefcase, Code, Brain, Palette, Cloud, Smartphone, TestTube } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "14+", label: "Students Upskilled" },
    { value: "3+", label: "Live Projects Delivered" },
  ];

  const courses = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Master modern web technologies from frontend to backend",
      color: "bg-gradient-primary",
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Dive into machine learning and data analytics",
      color: "bg-gradient-secondary",
    },
    {
      icon: Palette,
      title: "UI/UX Product Design",
      description: "Create beautiful, user-centered digital experiences",
      color: "bg-gradient-primary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Build and manage scalable cloud infrastructure",
      color: "bg-gradient-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Develop cross-platform apps with React Native",
      color: "bg-gradient-primary",
    },
    {
      icon: TestTube,
      title: "QA Automation",
      description: "Ensure quality through automated testing strategies",
      color: "bg-gradient-secondary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-secondary-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shape Your Tomorrow by{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Building a Skill Today
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn from industry professionals through guided hands-on training. Small batches of 7 learners ensure personalized attention and real-world project experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <NavLink to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/join-us">Join Now</NavLink>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Professional learning environment"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Small-batch paid courses designed for deep learning and real-world application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-muted-foreground">{course.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <NavLink to="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Real-Life Experience CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gain Real-World Experience</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with real tech companies and work on live projects while you learn. Build your portfolio with tangible results.
          </p>
          <Button asChild variant="secondary" size="lg">
            <NavLink to="/real-life-experience">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RisingVisionary?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Small Batch Learning</h3>
                <p className="text-muted-foreground">
                  Only 7 learners per batch ensures personalized attention and meaningful peer collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Live Projects</h3>
                <p className="text-muted-foreground">
                  Work on real outsourcing tasks from tech companies, building actual products and services
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Certified Learning</h3>
                <p className="text-muted-foreground">
                  Earn industry-recognized certificates upon completion, validating your new skills
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
