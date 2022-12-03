import { httpInstance } from "../httpInstance";

export const getUsers = async () => {
  try {
    const resp = await httpInstance.get("/auth/users");
    return resp.data;
  } catch (error) {
    return [];
  }
};
