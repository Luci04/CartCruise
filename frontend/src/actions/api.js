import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cart-cruise-one.vercel.app/',
    withCredentials: true,
});

export default api;
