import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background/90 to-background border-t border-glass-border mt-20">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                GA
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Guardian Angel Studios</h3>
                <p className="text-xs text-primary">IT Services & Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We leave an unforgettable mark in the world of entertainment and technology.
              Your premier destination for premium streaming content and innovative IT solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Movies', 'TV Shows', 'Pricing', 'Help Center'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Video Streaming',
                'Content Creation', 
                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'IT Consulting',
                'Digital Marketing'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">123 Innovation Street</p>
                  <p className="text-muted-foreground">Randvaal, Gauteng</p>
                  <p className="text-muted-foreground">South Africa, 1911</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">+27 123 456 7890</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">info@guardianangel.com</p>
                  <p className="text-muted-foreground">support@guardianangel.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass rounded-xl p-5 mt-6">
              <h5 className="font-semibold text-foreground mb-4">Stay Updated</h5>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 bg-transparent border-glass-border"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-glass-border pt-8 text-center">
          <p className="text-muted-foreground mb-4">
            &copy; 2024 Guardian Angel Studios. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;