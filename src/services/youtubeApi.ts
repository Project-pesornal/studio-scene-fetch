// YouTube Data API integration
export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  viewCount?: string;
  duration?: string;
}

export class YouTubeService {
  private static readonly BASE_URL = 'https://www.googleapis.com/youtube/v3';
  private static readonly API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'demo_key';

  static async searchMovies(query: string = 'movie trailer', maxResults: number = 20): Promise<YouTubeVideo[]> {
    try {
      // For demo purposes, we'll use mock data since we need API key setup
      return this.getMockMovies();
    } catch (error) {
      console.error('Error fetching YouTube movies:', error);
      return this.getMockMovies();
    }
  }

  static async getMoviesByDate(date: string = new Date().toISOString().split('T')[0]): Promise<YouTubeVideo[]> {
    try {
      // Search for movies released around the specified date
      const query = `movie trailer ${date.split('-')[0]}`;
      return this.searchMovies(query);
    } catch (error) {
      console.error('Error fetching movies by date:', error);
      return this.getMockMovies();
    }
  }

  static async getTrendingMovies(): Promise<YouTubeVideo[]> {
    try {
      // Get trending movie content
      return this.searchMovies('trending movie trailer 2024');
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return this.getMockMovies();
    }
  }

  // Mock data for demonstration
  private static getMockMovies(): YouTubeVideo[] {
    return [
      {
        id: '1',
        title: 'Epic Space Adventure - Official Trailer',
        description: 'An incredible journey through the cosmos awaits in this thrilling space epic.',
        thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
        channelTitle: 'Guardian Studios',
        publishedAt: new Date().toISOString(),
        viewCount: '2.5M',
        duration: '2:34'
      },
      {
        id: '2',
        title: 'Midnight Thriller - Coming Soon',
        description: 'A psychological thriller that will keep you on the edge of your seat.',
        thumbnail: 'https://images.unsplash.com/photo-1489599476464-531f91706f72?w=400&h=300&fit=crop',
        channelTitle: 'Dark Cinema',
        publishedAt: new Date().toISOString(),
        viewCount: '1.8M',
        duration: '3:12'
      },
      {
        id: '3',
        title: 'Romantic Comedy Gold - Full Trailer',
        description: 'A heartwarming romantic comedy that will make you laugh and cry.',
        thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop',
        channelTitle: 'Romance Films',
        publishedAt: new Date().toISOString(),
        viewCount: '3.2M',
        duration: '2:45'
      },
      {
        id: '4',
        title: 'Action Hero Returns - Teaser',
        description: 'The ultimate action hero is back with more explosive adventures.',
        thumbnail: 'https://images.unsplash.com/photo-1489599476464-531f91706f72?w=400&h=300&fit=crop',
        channelTitle: 'Action Central',
        publishedAt: new Date().toISOString(),
        viewCount: '4.1M',
        duration: '1:58'
      },
      {
        id: '5',
        title: 'Fantasy Quest - Epic Trailer',
        description: 'Enter a magical world filled with dragons, wizards, and ancient mysteries.',
        thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        channelTitle: 'Fantasy World',
        publishedAt: new Date().toISOString(),
        viewCount: '2.9M',
        duration: '3:21'
      },
      {
        id: '6',
        title: 'Horror Nightmares - Red Band Trailer',
        description: 'The most terrifying horror experience of the year is coming to theaters.',
        thumbnail: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop',
        channelTitle: 'Horror House',
        publishedAt: new Date().toISOString(),
        viewCount: '1.5M',
        duration: '2:17'
      },
      {
        id: '7',
        title: 'Sci-Fi Revolution - Official Trailer',
        description: 'The future is here in this mind-bending science fiction thriller.',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
        channelTitle: 'Sci-Fi Studios',
        publishedAt: new Date().toISOString(),
        viewCount: '3.7M',
        duration: '2:52'
      },
      {
        id: '8',
        title: 'Drama Masterpiece - Final Trailer',
        description: 'A powerful drama that explores the depths of human emotion.',
        thumbnail: 'https://images.unsplash.com/photo-1489599476464-531f91706f72?w=400&h=300&fit=crop',
        channelTitle: 'Dramatic Arts',
        publishedAt: new Date().toISOString(),
        viewCount: '2.1M',
        duration: '3:05'
      }
    ];
  }
}

// Hook for using YouTube data in components
export const useYouTubeMovies = () => {
  const fetchMovies = async (type: 'trending' | 'byDate' | 'search' = 'trending', params?: any) => {
    switch (type) {
      case 'trending':
        return YouTubeService.getTrendingMovies();
      case 'byDate':
        return YouTubeService.getMoviesByDate(params?.date);
      case 'search':
        return YouTubeService.searchMovies(params?.query, params?.maxResults);
      default:
        return YouTubeService.getTrendingMovies();
    }
  };

  return { fetchMovies };
};