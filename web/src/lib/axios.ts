import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://upload-ai-bsd.onrender.com' // 'http://localhost:3333' 
})
