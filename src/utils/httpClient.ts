import axios from 'axios';
import API_URL from '../config';

export default axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: API_URL,
  withCredentials: true,
});
