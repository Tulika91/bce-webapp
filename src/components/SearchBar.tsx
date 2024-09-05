import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <TextField
        label="Search for TV Shows"
        variant="outlined"
        value={query}
        onChange={handleChange}
        fullWidth
        sx={{
          input: { color: 'white' }, // Text color
          label: { color: 'white' }, // Label color
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Border color
            },
            '&:hover fieldset': {
              borderColor: 'lightgray', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Border color when focused
            },
          },
        }}
      />
    </div>
  );
};

export default SearchBar;

