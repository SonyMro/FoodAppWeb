import axios from 'axios';

const foodsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export default foodsApi;