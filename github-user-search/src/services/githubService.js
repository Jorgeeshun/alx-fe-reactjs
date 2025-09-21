import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Advanced user search using GitHub's Search API
 * @param {string} username - GitHub username (partial or full)
 * @param {string} location - User location
 * @param {string|number} minRepos - Minimum number of public repositories
 * @param {number} page - Page number for pagination
 */

export const advancedSearchUsers = async (username, location, minRepos, page = 1) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=6`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
