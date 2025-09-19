import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/90 border-b border-glass-border">
      {/* Top Bar */}
      <div className="border-b border-glass-border py-2">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="hidden sm:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+27 123 456 7890</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@guardianangel.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                GA
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Guardian Angel Studios</h1>
                <p className="text-xs font-medium text-muted-foreground">WE LEAVE AN UNFORGETTABLE MARK</p>
                <p className="text-xs text-primary">IT Services & Solutions</p>
              </div>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Movies', id: 'movies' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-foreground hover:text-primary font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;