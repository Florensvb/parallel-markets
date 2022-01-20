import axios from 'axios';

const protocol = process.env.REACT_APP_API_PROTOCOL || 'http';
const baseUrl = process.env.REACT_APP_API_BASE_URL || 'localhost:3001';

const genUrl = () => `${protocol}://${baseUrl}`;

export const postFormData = (formData) => {
  return axios.post(genUrl(), formData);
}

export const getUsers = () => {
  return axios.get(genUrl());
}