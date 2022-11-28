export const setProfile = (profile) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

export const getProfile = () => JSON.parse(localStorage.getItem("profile"));
