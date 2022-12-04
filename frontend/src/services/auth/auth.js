import { httpInstance } from "../httpInstance";

export const register = async (user) => {
  try {
    const response = await httpInstance.post("auth/users/register", user);
    return response;
  } catch (error) {
    return error;
  }
};

export const login = async (user) => {
  try {
    const response = await httpInstance.post("auth/users/login", user);
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserId = async (id) => {
  try {
    const res = await httpInstance.get("http://localhost:3000/api/auth/users/" + id);
    return res.data;
  } catch (error) {
    return {};
  }
};