import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface EpisodeListProps {
  episodes: any[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', gap: '20px', padding: '20px 0' }}>
      {episodes.map((episode) => (
        <Card key={episode.id} style={{ minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            height="200"
            image={episode.image ? episode.image.medium : ''}
            alt={episode.name}
          />
          <CardContent>
            <Typography variant="h6">{episode.name}</Typography>
            <Typography variant="body2">Season {episode.season}, Episode {episode.number}</Typography>
            <video
              width="100%"
              controls
              src={episode.url || 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'}
            >
              Your browser does not support the video tag.
            </video>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EpisodeList;

