import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ShowListProps {
  shows: any[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {shows.map((item: any) => (
        <Card key={item?.show ? item.show.id : item.id} style={{ backgroundColor: '#222', color: 'white' }}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              {item?.show ? item.show.name : item.name}
            </Typography>
            <img
              src={item?.show ? item.show.image?.medium : item.image?.medium || ''}
              alt={item?.show ? item.show.name : item.name}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <Button
              component={Link}
              to={`/show/${item?.show ? item.show.id : item.id}`}
              variant="contained"
              style={{ display: 'block', marginTop: '10px' }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowList;

