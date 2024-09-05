import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, MusicNote, Movie } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate(); 

  const categories = [
    { label: 'Popular', icon: <Home />, route: '/' }, 
    { label: 'Music', icon: <MusicNote />, route: '/music' },
    { label: 'Movie', icon: <Movie />, route: '/movie' },
  ];

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div style={{ width: '250px', background: '#111', height: '100vh', padding: '20px 0', color: 'white' }}>
      <List>
        {categories.map((category, index) => (
          <ListItem
            key={index}
            onClick={() => handleNavigation(category.route)} 
            style={{ cursor: 'pointer' }} 
          >
            <ListItemIcon style={{ color: 'white' }}>{category.icon}</ListItemIcon>
            <ListItemText primary={category.label} style={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
