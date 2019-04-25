import axios from 'axios';
const api = axios.create({
  baseURL: 'https://omnistack-emslucas.herokuapp.com',
});

export default api;