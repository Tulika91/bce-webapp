import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

interface CastListProps {
  cast: any[];
}

const CastList: React.FC<CastListProps> = ({ cast }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
      {cast.map((castMember: any) => (
        <Card key={castMember.person.id} style={{ width: '150px' }}>
          <CardContent style={{ textAlign: 'center' }}>
            <Avatar
              alt={castMember.person.name}
              src={castMember.person.image?.medium || ''}
              sx={{ width: 80, height: 80, margin: '0 auto' }}
            />
            <Typography variant="subtitle1">{castMember.person.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              as {castMember.character.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CastList;

