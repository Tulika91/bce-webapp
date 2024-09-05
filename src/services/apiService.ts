import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

export const getPopularShows = async (page: number) => {
    const response = await axios.get(`${API_BASE_URL}/shows?page=${page}`);
    return response.data;
  };

export const searchShows = async (query: string) => {
  const response = await axios.get(`${API_BASE_URL}/search/shows?q=${query}`);
  return response.data;
};

export const getShowDetails = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
  return response.data;
};

export const getShowEpisodes = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/shows/${id}/episodes`);
  return response.data;
};

export const getShowCast = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/shows/${id}/cast`);
  return response.data;
};
