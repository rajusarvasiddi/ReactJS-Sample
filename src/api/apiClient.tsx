import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

let onNetworkError: (() => void) | null = null;
export const setNetworkErrorHandler = (cb: () => void) => {
  onNetworkError = cb;
};

let cooldown = false;

apiClient.interceptors.request.use((config) => {
    console.log('CONFIG :: ', config);
    const token = "SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN-SAMPLE-TOKEN";
    // if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.log('ERROR OBJECT:', error);
    
    if (!error.response && error.message === 'Network Error') {
      if (!cooldown && onNetworkError) {
        console.warn("Network error detected..");
        alert("ALERT: " + error.message);  // ← This should fire now
        onNetworkError();
        cooldown = true;
      }
    }
    return Promise.reject(error);
  }
);


export default apiClient;