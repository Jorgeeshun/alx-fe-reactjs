import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

console.log(API_KEY); // will print your token (only in dev, not bundled in git)


const BASE_URL = "https://api.github.com/users";

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
