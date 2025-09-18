const Features = () => {
  const features = [
    {
      icon: "🎭",
      title: "Premium Content",
      description: "Access thousands of movies and TV shows in HD quality with instant streaming."
    },
    {
      icon: "📱",
      title: "Multi-Device",
      description: "Watch on any device - smartphone, tablet, laptop, or smart TV."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Ultra-fast loading with advanced streaming technology and global CDN."
    },
    {
      icon: "🎯",
      title: "Smart Recommendations",
      description: "AI-powered suggestions based on your viewing history and preferences."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy controls."
    },
    {
      icon: "🌟",
      title: "Premium Experience",
      description: "Ad-free viewing, offline downloads, and exclusive early access to new releases."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Guardian Angel Studios?</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience the future of entertainment with our cutting-edge streaming platform and comprehensive IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass glass-hover rounded-2xl p-8 text-center group transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;