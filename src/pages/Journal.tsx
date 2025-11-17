import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Journal = () => {
  const testimonials = [
    {
      name: "Dinesh Reddy",
      role: "Full-Stack Development Graduate",
      course: "Full-Stack Web Development",
      text: "This course transformed my understanding of web development. The instructors broke down complex concepts into digestible pieces, and the small batch size meant I could clarify doubts immediately. My coding skills improved dramatically within weeks.",
      rating: 5,
    },
    {
      name: "Jaswanth Kumar Reddy",
      role: "Now DevOps Engineer",
      course: "Agile Methodology",
      text: "Coming from a non-tech background, I was nervous. But the instructors were incredibly patient and supportive. The structured curriculum and practical exercises built my confidence step by step. Now I'm working as a DevOps Engineer at a startup!",
      rating: 5,
    },
    {
      name: "Manish Kumar",
      role: "UI/UX Designer",
      course: "UI/UX Product Design",
      text: "The design thinking approach was eye-opening. I loved how the course emphasized user empathy and iterative design. The feedback from instructors helped me refine my design process, and the portfolio I built landed me my dream job.",
      rating: 5,
    },
    {
      name: "James Mathew",
      role: "Data Scientist",
      course: "AI & Data Science",
      text: "The way the instructors explained machine learning algorithms made everything click for me. They have deep industry knowledge and shared practical tips I wouldn't find in books. The hands-on exercises solidified my understanding perfectly.",
      rating: 5,
    },
    {
      name: "Tejeswar Naidu",
      role: "Mobile Developer",
      course: "Mobile App Development",
      text: "This course covered everything I needed to become a confident mobile developer. From fundamentals to deployment strategies, the curriculum was thorough and well-structured. The small class meant personalized guidance throughout my learning journey.",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "QA Automation Engineer",
      course: "HTML, CSS and Javascript",
      text: "The teaching style was excellent—clear explanations with plenty of examples. I appreciated how the course balanced foundational knowledge with modern best practices. The supportive environment made learning enjoyable and effective.",
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
