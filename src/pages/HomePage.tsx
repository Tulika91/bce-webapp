import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import ShowList from '../components/ShowList';
import { searchShows, getPopularShows } from '../services/apiService';
import { Typography } from '@mui/material';

const HomePage: React.FC = () => {
  const [shows, setShows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  // Fetch popular shows when the component mounts and on load more
  useEffect(() => {
    const fetchPopularShows = async () => {
      try {
        const popularShows = await getPopularShows(page);
        setShows(prevShows => [...prevShows, ...popularShows]);
      } catch (error) {
        console.error('Error fetching popular shows:', error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPopularShows();
  }, [page]);

  // Memoize the handleSearch function to prevent unnecessary re-renders
  const handleSearch = useCallback(async (query: string) => {
    if (query === '') {
      const popularShows = await getPopularShows(0);
      setShows(popularShows);
    } else {
      setLoading(true);
      const results = await searchShows(query);
      setShows(results);
      setLoading(false);
    }
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoadingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Search Bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '10px' }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {/* Page Title */}
      <Typography variant="h4" style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
        New Series
      </Typography>

      {/* Show List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ShowList shows={shows} />
      )}
      {loadingMore && <p>Loading more shows...</p>}
    </div>
  );
};

export default HomePage;

