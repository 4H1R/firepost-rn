import mainAxios from 'axios';
import { BACKEND_URL } from '@env';

const axios = mainAxios.create({
  baseURL: 'http://192.168.178.188:3333/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
