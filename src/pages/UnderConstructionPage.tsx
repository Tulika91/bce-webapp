import React from 'react';
import { Typography, Box } from '@mui/material';
import { Construction } from '@mui/icons-material';

const UnderConstruction: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#111"
      color="white"
    >
      <Construction style={{ fontSize: 100, color: 'orange' }} />
      <Typography variant="h4" style={{ marginTop: '20px', color: 'orange' }}>
        Page Under Construction
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        This page is currently being built. Check back later!
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
