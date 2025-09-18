import { Button } from "@/components/ui/button";
import SearchBar, { SearchFilters } from "./SearchBar";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  
  const genres = [
    { emoji: "🎬", name: "Action" },
    { emoji: "😂", name: "Comedy" },
    { emoji: "💕", name: "Romance" },
    { emoji: "👻", name: "Horror" },
    { emoji: "🚀", name: "Sci-Fi" },
  ];

  const handleSearch = (query: string, filters: SearchFilters) => {
    // Scroll to movies section when search is performed
    const moviesSection = document.getElementById('movies');
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    toast({
      title: "Search Initiated",
      description: `Searching for "${query}" in the movies section below.`,
    });
  };

  const handleGenreClick = (genre: string) => {
    const moviesSection = document.getElementById('movies');
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    toast({
      title: `${genre} Movies`,
      description: `Showing ${genre} movies in the movies section.`,
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Welcome to Guardian Angel Studios!",
      description: "Sign up feature will be available soon. Thank you for your interest!",
    });
  };

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
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mb-12">
          <Button 
            onClick={handleGetStarted}
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
              <button
                key={index}
                onClick={() => handleGenreClick(genre.name)}
                className="glass glass-hover rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="text-3xl mb-3">{genre.emoji}</div>
                <div className="font-medium">{genre.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;