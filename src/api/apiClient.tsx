import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
    console.log('CONFIG :: ', config);
    const token = "SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN";
    // if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

export default apiClient;