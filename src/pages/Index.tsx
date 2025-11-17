import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { BookOpen, Users, Award, TrendingUp, Code, Brain, Palette, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Marquee Banner */}
      <div className="bg-gradient-hero text-white py-3 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-content {
            animation: marquee 20s linear infinite;
            display: flex;
            width: max-content;
          }
        `}</style>
        <div className="marquee-content">
          <div className="flex items-center gap-8 whitespace-nowrap px-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
          </div>
          <div className="flex items-center gap-8 whitespace-nowrap px-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold text-lg">🎓 Admissions Open - Limited Seats Only!</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-secondary-light opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shape Your Tomorrow by Building a Skill Today
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn from industry professionals through guided hands-on training in small batches of 7 learners
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="shadow-xl hover-scale">
                  <NavLink to="/courses">Explore Courses</NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-scale">
                  <NavLink to="/real-life-experience">Real Projects</NavLink>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full animate-pulse" />
              <img
                src={heroImage}
                alt="Students learning together"
                className="relative rounded-2xl shadow-2xl w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Ultra Modern */}
      <section ref={statsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Rate */}
            <div className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500" />
              <Card className="relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl" />
                <CardContent className="p-8 text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">Success Rate</p>
                  <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary w-[98%] animate-[slide-in-right_1.5s_ease-out]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Students Upskilled */}
            <div className={`group relative transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500" />
              <Card className="relative border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-10 rounded-full blur-2xl" />
                <CardContent className="p-8 text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-secondary mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                    14+
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">Students Upskilled</p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-8 bg-gradient-secondary rounded-full animate-[scale-in_0.5s_ease-out]"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Projects */}
            <div className={`group relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500" />
              <Card className="relative border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-10 rounded-full blur-2xl" />
                <CardContent className="p-8 text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    1500
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">SEK per Course</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                    <Sparkles className="h-6 w-6 text-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <Sparkles className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground">Professional training in small batches of 7 learners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover-scale animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <Button asChild variant="outline" className="w-full hover-scale">
                      <NavLink to="/courses">Learn More</NavLink>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light via-background to-secondary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary animate-[scale-in_0.5s_ease-out]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Start Your Learning Journey Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join our small batch courses and gain the skills you need to succeed in tech.
          </p>
          <Button asChild variant="hero" size="lg" className="hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <NavLink to="/courses">Explore Courses</NavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
