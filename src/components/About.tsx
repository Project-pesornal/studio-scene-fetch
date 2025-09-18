import { Users, Award, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "10,000+" },
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Zap, label: "Years Experience", value: "15+" },
  ];

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Guardian Angel Studios</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            We are a premier technology company that combines cutting-edge IT solutions with 
            innovative entertainment platforms. Our mission is to leave an unforgettable mark 
            in the digital landscape through exceptional service and groundbreaking technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="glass glass-hover rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To revolutionize the entertainment and technology industries by delivering 
              innovative streaming solutions and comprehensive IT services that exceed 
              client expectations and create lasting digital experiences.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Deliver cutting-edge streaming technology
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Provide exceptional IT consulting services
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Create unforgettable user experiences
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To become the global leader in entertainment technology and IT solutions, 
              known for our innovation, reliability, and commitment to transforming 
              how people consume digital content and interact with technology.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Global technology leadership
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Innovation-driven solutions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Sustainable digital transformation
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how Guardian Angel Studios can help transform your 
              digital presence and technology infrastructure.
            </p>
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="px-8 py-6 text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;