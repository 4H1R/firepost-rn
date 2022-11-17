import mainAxios from 'axios';

const axios = mainAxios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default axios;
