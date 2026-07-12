import api from "./../lib/axios";

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  console.log("loginUser response:", response.data); 
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};