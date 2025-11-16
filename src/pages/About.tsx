import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality Over Quantity",
      description: "Small batches of 7 learners ensure everyone gets personalized attention and meaningful learning experiences",
    },
    {
      icon: Heart,
      title: "Real-World Impact",
      description: "We believe in learning by doing. Every course includes hands-on projects with real companies and real outcomes",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Our curriculum evolves with the industry, ensuring you learn the most current and relevant skills",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We build lasting relationships between students, trainers, and industry partners that extend beyond the classroom",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RisingVisionary</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of tech professionals through hands-on learning and real-world experience
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RisingVisionary Services, we believe that the best way to learn is by doing. We bridge the gap between theoretical knowledge and practical skills by providing small-batch, intensive training programs where students work on real projects from actual tech companies.
            </p>
          </div>

          <Card className="border-2 bg-gradient-to-br from-primary-light to-secondary-light/30">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-center">
                Our unique model ensures that every graduate leaves not just with a certificate, but with a portfolio of real work, practical experience, and the confidence to tackle real-world challenges in their chosen field.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              RisingVisionary Services was founded on a simple observation: traditional education often fails to prepare students for the realities of working in the tech industry. While theoretical knowledge is important, it's the practical application that truly builds competence and confidence.
            </p>
            
            <p>
              We started with a pilot program of just 7 students working on a real web development project for a local startup. The results were remarkable—not only did the students complete the project successfully, but they also gained skills and insights that would have taken years to develop in a traditional classroom setting.
            </p>
            
            <p>
              Today, we've expanded to offer six comprehensive programs across different tech disciplines. Our small-batch approach remains unchanged because we've seen firsthand how personalized attention and peer collaboration in small groups leads to better learning outcomes.
            </p>
            
            <p>
              We partner with tech companies of all sizes, from ambitious startups to established firms, giving our students exposure to diverse work environments and methodologies. Every student who completes our program leaves with real projects in their portfolio and the practical skills that employers are looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">14+</div>
              <p className="text-lg opacity-90">Students Trained</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <p className="text-lg opacity-90">Partner Companies</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">6</div>
              <p className="text-lg opacity-90">Active Programs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lg opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
