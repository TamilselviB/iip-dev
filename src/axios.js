import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.235.3.83:3000',
});

export default instance;
