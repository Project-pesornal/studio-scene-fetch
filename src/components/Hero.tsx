import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const genres = [
    { emoji: "🎬", name: "Action" },
    { emoji: "😂", name: "Comedy" },
    { emoji: "💕", name: "Romance" },
    { emoji: "👻", name: "Horror" },
    { emoji: "🚀", name: "Sci-Fi" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=800&fit=crop)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            GUARDIAN ANGEL STUDIOS
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-4 font-semibold">
            WE LEAVE AN UNFORGETTABLE MARK
          </p>
          <p className="text-lg md:text-xl text-secondary mb-12">
            IT SERVICES AND SOLUTIONS
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass rounded-full p-4">
            <div className="flex gap-4">
              <Input 
                placeholder="Search for movies, TV shows, actors..."
                className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground text-base py-3"
              />
              <Button size="lg" className="rounded-full px-6">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary/90 animate-pulse-glow"
          >
            Get Started - Sign Up Free
          </Button>
        </div>

        {/* Genre Grid */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {genres.map((genre, index) => (
              <div 
                key={index}
                className="glass glass-hover rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{genre.emoji}</div>
                <div className="font-medium">{genre.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;