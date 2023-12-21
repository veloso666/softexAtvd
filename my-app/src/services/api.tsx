// src/Services/Api.tsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // A mesma porta definida no script do Json Server
});

export default api;
