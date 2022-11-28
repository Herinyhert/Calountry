import { httpInstance } from "../httpInstance";

export const getMyGroups = async () => {
  try {
    const response = await httpInstance.get("group");
    return response.data;
  } catch (error) {
    return [];
  }
};
