import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Building2, Users } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join RisingVisionaryServices</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, company, or trainer, we'd love to have you be part of our community
          </p>
        </div>
      </section>

      {/* Forms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="student" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Student
              </TabsTrigger>
              <TabsTrigger value="company" className="gap-2">
                <Building2 className="h-4 w-4" />
                Company
              </TabsTrigger>
              <TabsTrigger value="trainer" className="gap-2">
                <Users className="h-4 w-4" />
                Trainer
              </TabsTrigger>
            </TabsList>

            {/* Student Form */}
            <TabsContent value="student">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Student Application</CardTitle>
                  <CardDescription>
                    Join our next batch and start your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-first-name">First Name</Label>
                        <Input id="student-first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-last-name">Last Name</Label>
                        <Input id="student-last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
                      <Input id="student-email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-phone">Phone Number</Label>
                      <Input id="student-phone" type="tel" placeholder="+1 (555) 123-4567" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-course">Select Course</Label>
                      <Select>
                        <SelectTrigger id="student-course">
                          <SelectValue placeholder="Choose your course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullstack">Full-Stack Web Development</SelectItem>
                          <SelectItem value="ai">AI & Data Science</SelectItem>
                          <SelectItem value="uiux">UI/UX Product Design</SelectItem>
                          <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="qa">QA Automation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-background">Educational Background</Label>
                      <Textarea
                        id="student-background"
                        placeholder="Tell us about your education and experience"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-goals">Why do you want to join?</Label>
                      <Textarea
                        id="student-goals"
                        placeholder="What are your learning goals?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Company Form */}
            <TabsContent value="company">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Company Partnership</CardTitle>
                  <CardDescription>
                    Partner with us to access talented learners for your projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Acme Inc." required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-contact-name">Contact Person</Label>
                        <Input id="company-contact-name" placeholder="Jane Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-role">Your Role</Label>
                        <Input id="company-role" placeholder="CEO, CTO, etc." required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-email">Email</Label>
                        <Input id="company-email" type="email" placeholder="jane@acme.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-phone">Phone Number</Label>
                        <Input id="company-phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-website">Company Website</Label>
                      <Input id="company-website" type="url" placeholder="https://acme.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-size">Company Size</Label>
                      <Select>
                        <SelectTrigger id="company-size">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-projects">Project Details</Label>
                      <Textarea
                        id="company-projects"
                        placeholder="Describe the types of projects you need help with"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      Submit Partnership Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trainer Form */}
            <TabsContent value="trainer">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Trainer Application</CardTitle>
                  <CardDescription>
                    Share your expertise and mentor the next generation of tech professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="trainer-first-name">First Name</Label>
                        <Input id="trainer-first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="trainer-last-name">Last Name</Label>
                        <Input id="trainer-last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="trainer-email">Email</Label>
                        <Input id="trainer-email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="trainer-phone">Phone Number</Label>
                        <Input id="trainer-phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainer-expertise">Area of Expertise</Label>
                      <Select>
                        <SelectTrigger id="trainer-expertise">
                          <SelectValue placeholder="Select your expertise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullstack">Full-Stack Web Development</SelectItem>
                          <SelectItem value="ai">AI & Data Science</SelectItem>
                          <SelectItem value="uiux">UI/UX Product Design</SelectItem>
                          <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="qa">QA Automation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainer-experience">Years of Experience</Label>
                      <Input id="trainer-experience" type="number" placeholder="5" min="1" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainer-background">Professional Background</Label>
                      <Textarea
                        id="trainer-background"
                        placeholder="Tell us about your industry experience and what you've worked on"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainer-linkedin">LinkedIn Profile</Label>
                      <Input id="trainer-linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainer-motivation">Why do you want to teach?</Label>
                      <Textarea
                        id="trainer-motivation"
                        placeholder="What motivates you to mentor students?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      Submit Trainer Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
