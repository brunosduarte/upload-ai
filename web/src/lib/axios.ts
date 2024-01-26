import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nlwia-bsd.onrender.com' // 'http://localhost:3333' 
})