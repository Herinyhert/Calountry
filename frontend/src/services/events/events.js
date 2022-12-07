import { httpInstance } from "../httpInstance";

export const getMyEvents = async () => {
  try {
    const res = await httpInstance.get("/note");
    console.log(res);
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createEventFn = async (event) => {
  try {
    const res = await httpInstance.post("note/create", event);
    return res.data;
  } catch (error) {
    return {};
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await httpInstance.delete("note/" + id);
    console.log(res);
    return res.data;
  } catch (error) {
    return [];
  }
};
