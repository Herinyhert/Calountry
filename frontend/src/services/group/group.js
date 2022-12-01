import { httpInstance } from "../httpInstance";

export const getMyGroups = async () => {
  try {
    const response = await httpInstance.get("group");
    return response.data;
  } catch (error) {
    return [];
  }
};

export const createGroup = async (group) => {
  const res = await httpInstance.post("group/create", group);
  return res;
};

export const getAllGroups = async () => {
  try {
    const res = await httpInstance.get("group");
    return res.data;
  } catch (error) {
    return [];
  }
};
