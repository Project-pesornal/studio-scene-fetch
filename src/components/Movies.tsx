import { useState, useEffect } from "react";
import { Play, Calendar, Eye, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YouTubeVideo, useYouTubeMovies } from "@/services/youtubeApi";
import { useToast } from "@/hooks/use-toast";

const Movies = () => {
  const [movies, setMovies] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [activeFilter, setActiveFilter] = useState<'trending' | 'byDate'>('trending');
  const { fetchMovies } = useYouTubeMovies();
  const { toast } = useToast();

  const loadMovies = async (type: 'trending' | 'byDate' = 'trending', params?: any) => {
    setLoading(true);
    setActiveFilter(type);
    try {
      const movieData = await fetchMovies(type, params);
      setMovies(movieData);
      toast({
        title: "Movies Updated",
        description: `Loaded ${movieData.length} movies successfully.`,
      });
    } catch (error) {
      console.error('Failed to load movies:', error);
      toast({
        title: "Error",
        description: "Failed to load movies. Showing demo content.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies('trending');
  }, []);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    loadMovies('byDate', { date });
  };

  const handleMovieClick = (movie: YouTubeVideo) => {
    toast({
      title: `Playing: ${movie.title}`,
      description: `Opening ${movie.title} by ${movie.channelTitle}`,
    });
  };

  const handleRefresh = () => {
    loadMovies(activeFilter, activeFilter === 'byDate' ? { date: selectedDate } : undefined);
  };

  const formatViewCount = (count: string) => {
    if (!count) return '0';
    const num = parseInt(count.replace(/[^\d]/g, ''));
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return count;
  };

  return (
    <section id="movies" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Movies & Trailers</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Discover the latest movies and trending content from YouTube
          </p>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <label className="text-sm font-medium">Filter by date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="glass rounded-lg px-3 py-2 text-foreground bg-transparent border border-glass-border"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={activeFilter === 'trending' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => loadMovies('trending')}
                className="glass glass-hover"
              >
                Trending
              </Button>
              <Button 
                variant={activeFilter === 'byDate' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => loadMovies('byDate', { date: selectedDate })}
                className="glass glass-hover"
              >
                By Date
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRefresh}
                className="glass glass-hover"
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div 
                key={movie.id}
                className="glass glass-hover rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105"
                onClick={() => handleMovieClick(movie)}
              >
                <div className="relative">
                  <img 
                    src={movie.thumbnail} 
                    alt={movie.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1489599476464-531f91706f72?w=400&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="rounded-full">
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                  {movie.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {movie.duration}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {movie.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="truncate">{movie.channelTitle}</span>
                    {movie.viewCount && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{formatViewCount(movie.viewCount)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && movies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No movies found for the selected criteria.</p>
            <Button 
              onClick={() => loadMovies('trending')} 
              className="mr-4"
            >
              Load Trending Movies
            </Button>
            <Button 
              variant="outline"
              onClick={handleRefresh}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        )}

        {/* Stats */}
        {!loading && movies.length > 0 && (
          <div className="text-center mt-12">
            <div className="glass rounded-2xl p-6 inline-block">
              <p className="text-muted-foreground">
                Showing <span className="text-primary font-semibold">{movies.length}</span> movies
                {activeFilter === 'trending' ? ' from trending content' : ` for ${selectedDate}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;