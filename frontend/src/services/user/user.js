import { httpInstance } from "../httpInstance";

export const getUsers = async () => {
  try {
    const resp = await httpInstance.get("/auth/users");
    return resp.data;
  } catch (error) {
    return [];
  }
};

export const getDetailUser = async (id) => {
  try {
    const resp = await httpInstance.get("auth/users/"+id);
    return resp.data;
  } catch (error) {
    return {};
  }
};

export const upDateUser = async (id, form) => {
  try {
    delete form.id;
    delete form.isActive;
    const resp = await httpInstance.put("auth/users/"+id, form);
    return resp.data;
  } catch (error) {
    return {};
    
  }
};
