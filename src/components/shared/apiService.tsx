import apiClient from '../shared/apiClient';

export const getUsers = async (url: string) => {
  const response = await apiClient.get(url);
//   console.log('API Client Response Data :: ', response);
  return response;
};