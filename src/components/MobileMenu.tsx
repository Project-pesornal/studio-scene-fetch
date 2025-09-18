import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Movies', id: 'movies' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-[120px] z-40 glass backdrop-blur-xl">
          <div className="flex flex-col items-center justify-start pt-8 space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex flex-col gap-3 mt-8">
              <Button variant="outline" className="w-32">Login</Button>
              <Button className="w-32">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;