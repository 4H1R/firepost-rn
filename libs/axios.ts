import mainAxios from 'axios';
// @ts-ignore
import { BACKEND_URL } from '@env';

const axios = mainAxios.create({
  baseURL: 'http://192.168.1.57:3333/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axios;
