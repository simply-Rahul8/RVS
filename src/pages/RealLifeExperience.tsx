import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Briefcase, Building2, Code2, TrendingUp, CheckCircle2, Users } from "lucide-react";

const RealLifeExperience = () => {
  const benefits = [
    "Work on actual client projects from real tech companies",
    "Build a professional portfolio with tangible results",
    "Gain practical experience while learning",
    "Collaborate with industry professionals",
    "Understand real-world development workflows",
    "Network with potential employers",
  ];

  const projectTypes = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Build responsive websites, web applications, and e-commerce platforms for real clients",
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Analyze business data, create dashboards, and provide actionable insights",
    },
    {
      icon: Building2,
      title: "Product Design",
      description: "Design user interfaces, conduct user research, and create design systems",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-Life Experience</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn by doing. Work on live projects from real tech companies while mastering your craft.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Partnership with Companies</h3>
                <p className="text-muted-foreground">
                  We partner with small to medium tech companies that need support with development, design, and data tasks
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Guided Learning</h3>
                <p className="text-muted-foreground">
                  Our expert instructors guide you through the project requirements, teaching you the skills you need along the way
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Deliver Real Value</h3>
                <p className="text-muted-foreground">
                  Complete actual deliverables that help real businesses, building your portfolio and gaining valuable experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Types of Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Real-Life Experience Matters</h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary-light/50 border border-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Companies */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You a Tech Company?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us to access talented learners who can help with your projects while gaining real-world experience.
          </p>
          <Button asChild variant="secondary" size="lg">
            <NavLink to="/join-us">Partner With Us</NavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealLifeExperience;
