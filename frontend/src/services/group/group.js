import { httpInstance } from "../httpInstance";

export const getMyGroups = async (id) => {
  try {
    const response = await httpInstance.get("auth/users/groups/" + id);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getDetailGroup = async (id) => {
  try {
    const resp = await httpInstance.get(
      "http://localhost:3000/api/group/group-details/" + id
    );
    return resp.data;
  } catch (error) {
    return {};
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

export const updateGroup = async (id, group) => {
  try {
    delete group.created_at;
    delete group.id;
    const res = await httpInstance.put("group/" + id, group);
    return res.data;
  } catch (error) {
    return {};
  }
};

export const deleteGroup = async (id) => {
  try {
    const res = await httpInstance.delete("group/" + id);
    return res
  } catch (error) {
    return {};
  }
};
