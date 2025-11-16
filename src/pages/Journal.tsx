import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Journal = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Development Graduate",
      course: "Full-Stack Web Development",
      text: "The real-life project experience was invaluable. I worked on an e-commerce platform for a real client and learned more in 12 weeks than I did in my entire CS degree. The small batch size meant I got personalized attention whenever I needed it.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Now DevOps Engineer",
      course: "Cloud & DevOps",
      text: "Coming from a non-tech background, I was nervous. But the instructors were patient and the hands-on projects gave me the confidence I needed. I'm now working as a DevOps Engineer at a startup!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      course: "UI/UX Product Design",
      text: "The design thinking approach and real client projects helped me build a portfolio that landed me my dream job. The 7-person batch size created a supportive community where we all learned from each other.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      course: "AI & Data Science",
      text: "Working on real datasets from actual companies gave me practical insights that no textbook could provide. The instructors are industry veterans who know their stuff inside out.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Mobile Developer",
      course: "Mobile App Development",
      text: "Building a real app that's now on the App Store was incredible. The course covered everything from development to deployment, and the small class size meant I could ask all my questions.",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "QA Automation Engineer",
      course: "QA Automation",
      text: "The practical approach to test automation with real codebases prepared me perfectly for my current role. I appreciated how the course balanced theory with hands-on practice.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <Quote className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Journal</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with RisingVisionary
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary mt-1">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lg opacity-90">Course Completion Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">92%</div>
              <p className="text-lg opacity-90">Job Placement Success</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <p className="text-lg opacity-90">Average Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journal;
