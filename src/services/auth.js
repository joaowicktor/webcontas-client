import api from './api';

const CURRENT_USER_KEY = 'current-user';

export const getToken = () => {
  return localStorage.getItem(CURRENT_USER_KEY);
}

export const isAuthenticated = async () => {
  const { token } = JSON.parse(getToken());
  
  if (!token) {
    return false;
  }
  try {
    const response = await api.endpoints.validate({ authToken: token });
    return response.data.success;
  } catch (err) {
    return err.data.success;
  }
}

export const login = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export const getUserId = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)).userId;
}