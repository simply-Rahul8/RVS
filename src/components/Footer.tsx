import { NavLink } from "@/components/NavLink";
import { GraduationCap, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
                RisingVisionary
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering learners with real-world skills and hands-on experience for tomorrow's challenges.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/real-life-experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Real-Life Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/journal" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Student Journal
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Full-Stack Development</li>
              <li className="text-muted-foreground text-sm">AI & Data Science</li>
              <li className="text-muted-foreground text-sm">UI/UX Design</li>
              <li className="text-muted-foreground text-sm">Cloud & DevOps</li>
              <li className="text-muted-foreground text-sm">Mobile Development</li>
              <li className="text-muted-foreground text-sm">QA Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@risingvisionary.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>123 Learning Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RisingVisionaryServices. All rights reserved.
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
