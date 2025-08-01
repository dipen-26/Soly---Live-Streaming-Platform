// src/api/auth.js
import axios from "axios";

const API = "http://localhost:8000/api/accounts"; // update if deployed

export const registerUser = async (data) => {
  return await axios.post(`${API}/register/`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API}/login/`, data);
};

export const getUserProfile = async (userId) => {
  return await axios.get(`${API}/profile/${userId}/`);
};
