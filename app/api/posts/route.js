import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Adjust the base URL as needed
});

export const GET = async (req, res) => {
  const { query } = req;
  try {
    if (query.id) {
      // Get a single post by ID
      const response = await api.get(`/posts/${query.id}`);
      res.status(200).json(response.data);
    } else {
      // Get all posts
      const response = await api.get('/posts');
      res.status(200).json(response.data);
    }
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};

export const POST = async (req, res) => {
  const { body } = req;
  try {
    const response = await api.post('/posts', body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};

export const PUT = async (req, res) => {
  const { query, body } = req;
  try {
    const response = await api.put(`/posts/${query.id}`, body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { query } = req;
  try {
    const response = await api.delete(`/posts/${query.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};