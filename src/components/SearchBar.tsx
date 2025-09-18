import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

export interface SearchFilters {
  genre?: string;
  year?: string;
  type?: 'movie' | 'trailer' | 'all';
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const { toast } = useToast();

  const handleSearch = () => {
    if (!query.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter a search term to find movies.",
        variant: "destructive",
      });
      return;
    }

    onSearch(query, filters);
    toast({
      title: "Searching...",
      description: `Looking for "${query}" with your selected filters.`,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="glass rounded-full p-4">
        <div className="flex gap-4">
          <Input 
            placeholder="Search for movies, TV shows, actors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground text-base py-3"
          />
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline" 
            size="lg" 
            className="rounded-full px-4"
          >
            <Filter className="w-5 h-5" />
          </Button>
          <Button 
            onClick={handleSearch}
            size="lg" 
            className="rounded-full px-6"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="glass rounded-2xl p-6 animate-fade-in">
          <h3 className="font-semibold mb-4">Search Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Genre</label>
              <select 
                value={filters.genre || ''}
                onChange={(e) => setFilters({...filters, genre: e.target.value})}
                className="w-full glass rounded-lg px-3 py-2 bg-transparent border border-glass-border text-foreground"
              >
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="romance">Romance</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <select 
                value={filters.year || ''}
                onChange={(e) => setFilters({...filters, year: e.target.value})}
                className="w-full glass rounded-lg px-3 py-2 bg-transparent border border-glass-border text-foreground"
              >
                <option value="">Any Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select 
                value={filters.type || 'all'}
                onChange={(e) => setFilters({...filters, type: e.target.value as any})}
                className="w-full glass rounded-lg px-3 py-2 bg-transparent border border-glass-border text-foreground"
              >
                <option value="all">All Content</option>
                <option value="movie">Movies Only</option>
                <option value="trailer">Trailers Only</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Button 
              onClick={() => {
                setFilters({});
                toast({
                  title: "Filters Cleared",
                  description: "All search filters have been reset.",
                });
              }}
              variant="outline" 
              size="sm"
            >
              Clear Filters
            </Button>
            <Button 
              onClick={handleSearch}
              size="sm"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;