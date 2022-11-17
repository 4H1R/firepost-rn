import mainAxios from 'axios';
import { BACKEND_URL } from '@env';

const axios = mainAxios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
