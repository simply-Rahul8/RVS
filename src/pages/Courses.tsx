import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Code, Brain, Palette, Cloud, Smartphone, TestTube, Clock, Users, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      duration: "12 weeks",
      batchSize: "7 learners",
      description: "Master modern web technologies from frontend to backend. Learn React, Node.js, databases, and deployment.",
      topics: ["React & TypeScript", "Node.js & Express", "PostgreSQL & MongoDB", "REST APIs", "Cloud Deployment"],
      color: "bg-gradient-primary",
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      duration: "14 weeks",
      batchSize: "7 learners",
      description: "Dive into machine learning, data analytics, and AI applications. Work with real datasets and build predictive models.",
      topics: ["Python & Libraries", "Machine Learning", "Deep Learning", "Data Visualization", "AI Ethics"],
      color: "bg-gradient-secondary",
    },
    {
      icon: Palette,
      title: "UI/UX Product Design",
      duration: "10 weeks",
      batchSize: "7 learners",
      description: "Create beautiful, user-centered digital experiences. Learn design thinking, prototyping, and user research.",
      topics: ["Design Thinking", "Figma & Tools", "User Research", "Prototyping", "Usability Testing"],
      color: "bg-gradient-primary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      duration: "12 weeks",
      batchSize: "7 learners",
      description: "Build and manage scalable cloud infrastructure. Master AWS, Docker, Kubernetes, and CI/CD pipelines.",
      topics: ["AWS/Azure/GCP", "Docker & Containers", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
      color: "bg-gradient-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      duration: "12 weeks",
      batchSize: "7 learners",
      description: "Develop cross-platform mobile apps with React Native. Build for iOS and Android simultaneously.",
      topics: ["React Native", "Mobile UI/UX", "Native APIs", "App Deployment", "Performance Optimization"],
      color: "bg-gradient-primary",
    },
    {
      icon: TestTube,
      title: "QA Automation",
      duration: "10 weeks",
      batchSize: "7 learners",
      description: "Ensure quality through automated testing strategies. Learn testing frameworks, CI/CD integration, and best practices.",
      topics: ["Test Automation", "Selenium & Cypress", "API Testing", "Performance Testing", "CI/CD Integration"],
      color: "bg-gradient-secondary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional training programs designed for hands-on learning in small batches
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">Paid Course</Badge>
                    </div>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{course.description}</p>

                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.batchSize}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">What You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full" variant="default">
                        <NavLink to="/join-us">Enroll Now</NavLink>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Certified</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Upon successful completion of your course, receive an industry-recognized certificate that validates your new skills and knowledge.
          </p>
          <Button asChild variant="hero" size="lg">
            <NavLink to="/join-us">Start Your Journey</NavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
