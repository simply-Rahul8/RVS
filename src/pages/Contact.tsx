import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Buttons */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            
            {/* Contact Buttons - Horizontal Layout */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Call Button */}
              <Button
                size="lg"
                variant="default"
                className="flex items-center gap-3 px-8"
                onClick={() => window.location.href = 'tel:+46793484087'}
              >
                <Phone className="h-5 w-5" />
                <span>Call: +46 793 484 087</span>
              </Button>

              {/* LinkedIn Button */}
              <Button
                size="lg"
                variant="hero"
                className="flex items-center gap-3 px-8"
                onClick={() => window.open('https://www.linkedin.com/in/raghuvamsisairangannagari', '_blank')}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </Button>

              {/* Email Button */}
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-3 px-8"
                onClick={() => window.location.href = 'mailto:raghuvamsisair@gmail.com'}
              >
                <Mail className="h-5 w-5" />
                <span>raghuvamsisair@gmail.com</span>
              </Button>
            </div>


            {/* Office Hours Info */}
            <div className="mt-12 text-center">
              <Card className="border-2 max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Office Hours</h3>
                  </div>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM (CET)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
