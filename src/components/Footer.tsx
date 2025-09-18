import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleLinkClick = (linkName: string) => {
    // For demo purposes, we'll show a toast or alert
    alert(`${linkName} page will be available soon!`);
  };

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
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('Facebook'); }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('Twitter'); }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('Instagram'); }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('YouTube'); }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('LinkedIn'); }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
                  <button 
                    onClick={() => handleLinkClick(link)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link}
                  </button>
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
                  <button 
                    onClick={() => handleLinkClick(service)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-4 mb-6">
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
                  <button 
                    onClick={() => window.open('tel:+27123456789')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    +27 123 456 7890
                  </button>
                  <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <button 
                    onClick={() => window.open('mailto:info@guardianangel.com')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    info@guardianangel.com
                  </button>
                  <button 
                    onClick={() => window.open('mailto:support@guardianangel.com')}
                    className="text-muted-foreground hover:text-primary transition-colors block text-left"
                  >
                    support@guardianangel.com
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Component */}
            <Newsletter />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-glass-border pt-8 text-center">
          <p className="text-muted-foreground mb-4">
            &copy; {currentYear} Guardian Angel Studios. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <button 
              onClick={() => handleLinkClick('Privacy Policy')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('Terms of Service')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLinkClick('Cookie Policy')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => handleLinkClick('DMCA')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              DMCA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;