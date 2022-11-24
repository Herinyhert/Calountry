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
