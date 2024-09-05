import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { CircularProgress, Typography, Card, CardContent, Button } from '@mui/material';
import { getShowDetails, getShowEpisodes, getShowCast } from '../services/apiService';
import EpisodesList from '../components/EpisodesList';
import CastList from '../components/CastList';

const ShowDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); 
  const [showDetails, setShowDetails] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [cast, setCast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getShowDetails(id);
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    const fetchEpisodes = async () => {
      try {
        const episodesData = await getShowEpisodes(id);
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    const fetchCast = async () => {
      try {
        const castData = await getShowCast(id);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchDetails();
    fetchEpisodes();
    fetchCast();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!showDetails) {
    return <p>Show details not found.</p>;
  }

  return (
    <div>
      {/* Go Back Button */}
      <Button
        variant="outlined"
        style={{ marginBottom: '20px' }}
        onClick={() => navigate('/')} 
      >
        Go Back
      </Button>

      <Card>
        <CardContent>
          <Typography variant="h4">{showDetails.name}</Typography>
          <img
            src={showDetails.image?.medium}
            alt={showDetails.name}
            style={{ marginBottom: '20px' }}
          />
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
          <Typography variant="body2">Premiered: {showDetails.premiered}</Typography>
          <Typography variant="body2">Language: {showDetails.language}</Typography>
          <Typography variant="body2">Genres: {showDetails.genres?.join(', ')}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Episodes
      </Typography>
      <EpisodesList episodes={episodes} />

      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Cast
      </Typography>
      <CastList cast={cast} />
    </div>
  );
};

export default ShowDetailsPage;
