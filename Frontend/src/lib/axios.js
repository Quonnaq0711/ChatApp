import axios from 'axios'

export const axiosInstance = axios.create({
    baseUrl: 'https://localhost:5001/api',
    withCredentials: true
});